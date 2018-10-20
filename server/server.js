// server.js

const express = require('express');
const bodyParser = require('body-parser');
const pretty = require('express-prettify');

const models = require('./models/index');
const main = require('./routers');
const holiday = require('./routers/holiday');
 


const app = express();

// CORS Settings
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware 
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(pretty({ query: 'pretty' }));

// Set our port
const port = process.env.PORT || 8080;

// All of our routes will console log a status
app.use(function (req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});


// All of our routes will be prefixed with /api
app.use('/api', main);
app.use('/holiday', holiday);

module.exports = app;