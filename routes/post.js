/*******************************************************************************
* File Name      : post.js                                                     *
* Created Date   : Sunday, May 2nd 2021, 6:46:59 pm                            *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : post route

const express = require('express');
const controller = require('../controllers/post');
const asyncHandler = require('express-async-handler');
var router = express.Router();

router.post('/new', asyncHandler( controller.newPost ));
router.get('/show', asyncHandler(controller.showPostsGet) );

module.exports = router;