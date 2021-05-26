/*******************************************************************************
* File Name      : post.js                                                     *
* Created Date   : Monday, April 26th 2021, 2:50:16 am                         *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : post controller 입니다.

const PostModel = require('../models/post');
const Validator  = require("fastest-validator");
const { isLogined, getLoginData, isNotLogined } = require('../utils/sessions');
const { makeMessage, makeErrors } = require('../utils/makeError');
const { json } = require('body-parser');

/**
 * 새로운 글을 작성합니다. 
 */
exports.newPost = async ( req, res ) => {
    console.log( req.body );
    if ( isNotLogined( req.session ) )
        return res.status(400).json(makeMessage('로그인 해주세요!'));
    const schema = {
        title: { type: "string" },
        content: { type: "string" }
    };
    const v = new Validator();
    const error = v.validate( req.body, schema );
    if ( error !== true )
        return res.status(400).json( makeErrors(' API Error', error ) );

    const login_info = getLoginData( req.session );
    const newPost = await PostModel.createPost( login_info._id, req.body.title, req.body.content);

    return res.status(200).json();
}

/**
 * 최신 글을 10개 얻습니다..
 */
exports.showPostsGet = async ( req, res ) => {
    // 임시로 10개 만큼 반환합니다.
    const posts = await PostModel.find({ }).limit( 10 ); 
    return res.json( posts );
}
