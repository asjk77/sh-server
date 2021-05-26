/*******************************************************************************
* File Name      : post.js                                                     *
* Created Date   : Monday, April 26th 2021, 2:49:45 am                         *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : postModel 을 설정합니다.!

const AccountModel = require('./account');
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    writer : { type: mongoose.Types.ObjectId, required: true },
    content: { type: String, required: true }
});
const CommentModel = mongoose.model('comment', CommentSchema);
const PostSchema = new mongoose.Schema({
    header:{
        writer : { type : mongoose.Types.ObjectId, ref : 'AccountModel' },
        title : String,
        createdAt : { type: Date, default: Date.now }
    },
    contents: String,
    footer:{
        comment : [ CommentSchema ]
    }
}); 

/**
 * 
 * @param {mongoose.Types.ObjectId} writer 
 * @param {String} writer_nickname 
 * @param {String} contents 
 * @returns Promise
 */
PostSchema.statics.createPost = function (
    writer,
    title,
    content
)
{
    const newPost = new this({
        header: {
            writer,
            title,
        },
        contents : content,
    });

    return newPost.save();
}

/**
 * Post에 글을 작성합니다.
 * writer: 
 */
PostSchema.methods.WriteComment = function (
    writer, content
) {
    const newComment = new CommentModel( {writer, content} );
    this.footer.comment.push( newComment );
    return this.save();
}

module.exports = mongoose.model( 'post', PostSchema );