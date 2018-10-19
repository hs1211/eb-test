// server.js

const express = require('express');
const bodyParser = require('body-parser');
require('./models/index');


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

// Set our port
const port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();

// All of our routes will console log a status
app.use(function (req, res, next) {
  console.log(req.method + ': ' + req.url);
  next();
});

// Ideally, this route sends the index.html
router.get('/', function (req, res) {
  // res.sendFile(__dirname + '/public/views/index.html');
  res.json({
    message: 'Node-Express-Sequelize Server in DEV'
  });
});

// All of our routes will be prefixed with /api
app.use('/api', router);

module.exports = app;