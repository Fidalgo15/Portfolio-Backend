require('dotenv').config();
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config')

//Database Setup
const connection_string = config.database.buildConnectionString();
mongoose.connect(connection_string)
  .then(() => {
    console.log('Database connection successful.')
  })
  .catch((error) => {
    console.log('An error occurred connecting to the database', error)
  })

  //Middleware imports
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let loginRouter = require('./routes/Login');
let workRouter = require('./routes/WorkExperiences');
let skillsRouter = require('./routes/Skills');
let educationRouter = require('./routes/Education');
let projectsRouter = require('./routes/Projects');
let referencesRouter = require('./routes/References');
let catalogRouter = require('./routes/KnowledgeCatalog');

//Server Setup
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/work', workRouter);
app.use('/skills', skillsRouter);
app.use('/education', educationRouter)
app.use('/projects', projectsRouter)
app.use('/references', referencesRouter)
app.use('/catalog', catalogRouter)

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
  res.render('error');
});

module.exports = app;
