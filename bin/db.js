/*******************************************************************************
* File Name      : db.js                                                       *
* Created Date   : Thursday, April 29th 2021, 5:13:57 pm                       *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : setup DB;

var configs = require('./configs');
var mongoose = require('mongoose');
// connect DB
mongoose.connect(
  configs.database.HOST,
  {useNewUrlParser: true, useUnifiedTopology: true, 
  useCreateIndex: true}
);

mongoose.connection.on('error', console.error.bind(console, 'Connection Error:'));
mongoose.connection.once('open',() => { console.log( '[ DBServer ] 연결이 성공함' ); } )
