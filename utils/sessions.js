/*******************************************************************************
* File Name      : session_type.js                                             *
* Created Date   : Sunday, April 25th 2021, 8:17:09 pm                         *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 모든 세션 타입을 저장합니다.


/**
 * 로그인합니다.
 */
exports.login = function ( session, account ) {
    session.LoginInfo = {
        _id : account._id,
        profile : account.profile
    }
}

/**
 * 로그아웃 합니다.!참
 */
exports.logout = function ( session ) {
    session.LoginInfo = undefined
}

/**
 * 로그인 했을 경우 참 을 반환합니다.
 */
exports.isLogined = function ( session ) {
    return session.LoginInfo !== undefined;
}

/**
 * 로그인했을경우 거짓 을 반환합니다.
 */
exports.isNotLogined = function ( session ) {
    return session.LoginInfo === undefined;
}
/**
 * GET LoginData
 */
exports.getLoginData = function ( session ) {
    return session.LoginInfo;
}