/*
 * File Name      : makeErrorMsg.md 
 * Created Date   : Sunday, April 25th 2021, 9:18:49 am
 * Author         : Hwang SanHo 
 * Email          : tksgh1000@naver.com 
 * Copyright (c) 2021 San Form Co. 
 */

exports.makeMessage = ( str ) => ({
    "message": str
});

exports.makeErrors = ( str, errors ) => ({
    "message" : str,
    "error": errors
})
