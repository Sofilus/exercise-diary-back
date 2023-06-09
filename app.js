var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var diarypostsRouter = require('./routes/diaryposts');
var usersRouter = require('./routes/users');

var app = express();

async function init(){
    try {
        const options = {useNewUrlParser: true, useUnifiedTopology: true}
        await mongoose.connect("mongodb://127.0.0.1:27017/exercise-diary", options)
        console.log("Connected to database")
    }
    catch (error) {
        console.error(error)
    }
}



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/diaryposts', diarypostsRouter);
app.use('/users', usersRouter);

init();

module.exports = app;
