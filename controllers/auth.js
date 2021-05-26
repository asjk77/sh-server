/*******************************************************************************
* File Name      : auth.js                                                     *
* Created Date   : Saturday, April 24th 2021, 7:42:24 am                       *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/
const { makeErrors, makeMessage } = require("../utils/makeError");
const sessionUtils = require('../utils/sessions');
const accountModel = require("../models/account");
const Validator= require("fastest-validator");

// Description : auth.Controller 입니다.

exports.registerPost = async ( req, res ) => {
    // API validation
    const schema = {
        email: { type: "email" },
        passwd: { type: "string" },
        firstname: { type: "string", max:100 },
        lastname: { type: "string", max:100 },
        address: { type: "string", min: 10, max:100 }
    };

    const v = new Validator();
    const error = v.validate( req.body, schema );
    if ( error !== true )
        return res.status(400).json(makeErrors( 'API Error', error ));
    
    // 유효한 email 인지 확인합니다.
    const post = req.body;
    const account = await accountModel.findByEmail( post.email );

    if ( account !== null ) // 계정이 존재할경우
        return res.status(400).json(makeErrors('Validation Error', '이미 이메일이 존재합니다.'));
    
    //
    const newAccount = await accountModel.createAccount(
        post.email,
        post.passwd,
        post.firstname,
        post.lastname,
        post.address
        );

    return res.status(200).json(makeMessage( "환영합니다. [" + newAccount.auth.email + "] 님" ));
}
/**
 * 로그인합니다. 
 */
exports.loginPost = async ( req, res ) => {
    const schema = {
        email: { type: "email" },
        passwd: { type: "string" }
    }
    const v = new Validator();
    const error = v.validate( req.body, schema ); 

    if( error !== true ) 
        return res.status(400).json( makeErrors('API Error', error ));

    const account = await accountModel.findByEmail( req.body.email );

    if ( account === null )
        return res.status(400).json( makeErrors('Validation Error', '아이디를 찾을 수 없읍니다.') );

    const result = account.validatePasswd( req.body.passwd );
    
    if ( ! result )
        return res.status(400).json(makeErrors('Validation Error', '비밀번호를 찾을 수 없읍니다.'));

    // 새션을 생성합니다.
    sessionUtils.login( req.session, account );
    const loginInfo = sessionUtils.getLoginData( req.session );

    return res.status(200).json( makeMessage('환영합니다.' + loginInfo.profile.nickname + '님' ));
}

/**
 * 로그아웃 합니다. 
 */
exports.logoutGet = async ( req, res ) => {
    // 로그인 하지 않을 경우
    if( sessionUtils.isNotLogined(req.session) )
        return res.status(400).json( makeMessage('로그인 해주세요!') );
    
    
    sessionUtils.logout(req.session);
    return res.status(200).json( makeMessage('로그아웃 되었습니다.!') );
}