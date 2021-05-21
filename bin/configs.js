/*******************************************************************************
* File Name      : configs.js                                                  *
* Created Date   : Thursday, April 29th 2021, 8:19:17 am                       *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : 프로잭트의 기본 환경을 설정합니다.

// setup .env File

const env = process.env;

module.exports = {
    server: {
        PORT: env.SERVER_PORT || '4000'
    },
    database: {
        HOST: env.DB_HOST || 'mongodb://localhost/test',
        USER: env.DB_USER || 'root',
        PASSWD: env.DB_PASSWD || '0000'
    },
    session: {
        SECRET : env.SESSION_SECRET || '@#@$MYSIGN#@$#$!@'
    }
} 