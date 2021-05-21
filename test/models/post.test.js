/*******************************************************************************
* File Name      : post.test.js                                                *
* Created Date   : Monday, May 17th 2021, 2:01:32 pm                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : postModel을 테스트 합니다.

require('../../bin/db'); // setup DB 

const mongoose = require('mongoose');
const utils = require('./utils');
const PostModel = require( '../../models/post');

describe('Test PostModel', () => {

    test('Test CreatePost And Write Comment ', async () => {
        const newDummyAccount = await utils.getDummyAccount();
        expect(newDummyAccount).toBeDefined();

        const newPost = await PostModel.createPost(
            newDummyAccount._id,
            'dummy',
            'dummy'
        );

        await newPost.WriteComment(
            newDummyAccount._id,
            'dummy_comment'
        );
    });
});