/*******************************************************************************
* File Name      : makeHash.js                                                 *
* Created Date   : Monday, April 26th 2021, 3:16:07 am                         *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description :
var crypto = require('crypto');

/**
 * sha1 으로 해싱합니다.
 * @param {*} data 
 * @returns String
 */
exports.makeHash = ( data ) => {
    return crypto.createHash('sha1').update(data).digest('hex');
}