
'use strict'

var express = require('express')


var path = require('path')

var app = express()


var bodyParser = require('body-parser')

// Require configuration file defined in app/Config.js
var config = require('./app/Config')


// Sends static files  from the public path directory
app.use("/public",express.static(path.join(__dirname, '/public')));
app.use("/botchat",express.static("../BotFramework-WebChat"));
app.use("/build",express.static(path.join(__dirname, '/dist')));


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

var port = config.APP_PORT || 3000

app.listen(port) // Listen on port defined in config file

console.log('App listening on port ' + port)



app.use(function (req, res, next) {
    // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port)

    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Pass to next layer of middleware
  next();
});


// Server index.html page when request to the root is made
app.get('/', function (req, res, next) {
  res.sendFile('./public/index.html',{root:__dirname},function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:');
    }
  })
});