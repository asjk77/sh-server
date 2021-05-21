/*******************************************************************************
* File Name      : auth.js                                                     *
* Created Date   : Saturday, April 24th 2021, 7:35:33 am                       *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : auth.js 를 컴파일링 합니다.

/**
 * 로그인, 로그아웃
 * 아이디 찾기, 비밀번호 찾기
 * 회원 가입
 */

const express = require('express');
const controller = require('../controllers/auth');
const asyncHandler = require('express-async-handler');

const router = express.Router();

// login
router.post(
    '/login', asyncHandler(controller.loginPost)
);

// logout
router.get(
    '/logout', asyncHandler(controller.logoutGet)
);

router.post(
    '/register', asyncHandler(controller.registerPost)
)


module.exports = router;