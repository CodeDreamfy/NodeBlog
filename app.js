var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/config');
var routes = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');


var session = require('express-session');
mongoose.connect(config.mongodb);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db open success');
});
var app = express();
//socket.IO
var server = require('http').Server(app);
// var io = require('socket.io')(server);

//socket链接
// io.on('connection', function( socket ){
//   socket.emit('news', { hello: 'world'})
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);

routes(app)


// app.use(session({
//   secret: 'asasa',
//   key: 'asas',//cookie name
//   cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}//30 days
// }));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

server.listen(3000,function(){
  console.log('listening in port 3000')
})
