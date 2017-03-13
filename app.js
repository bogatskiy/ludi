const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const currentStatic = require('./gulp/config').root;
const config = require('./config.json');
const uploadDir = config.upload;
const favicon = require('serve-favicon');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, './public/assets/img', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, currentStatic)));

app.use('/', require('./routes/index'));
app.use('/menu', require('./routes/menu'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));

app.use(function (req, res, next) {
  res
    .status(404)
    .render('404');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res
    .status(500)
    .render('500');
});

server.listen(3000, '188.166.95.105');
server.on('listening', function () {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
});