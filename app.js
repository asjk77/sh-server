var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');

var configs = require('./bin/configs')

var authRouter = require('./routes/auth');
var postRouter = require('./routes/post');
const { makeMessage, makeErrors } = require('./utils/makeError');

var app = express();

// 세션을 설정합니다.
app.use(session({
 secret: configs.session.SECRET,
 resave: false,
 saveUninitialized: true
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', authRouter);
app.use('/post', postRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log( err );
  res.json( makeErrors( '죄송합니다. 알수 없는 오류가 발생하였습니다.', res.locals.error, res.locals.message ) );
});

module.exports = app;
