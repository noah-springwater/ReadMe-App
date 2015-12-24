var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var ToRead = require('./models/toRead.js');
var AlreadyRead = require('./models/alreadyRead.js');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://localhost/readMeApp', function (err){
  if(err){
    console.log(err);
  } else {
    console.log('connection successful - server');
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

//serve static files from the public directory
app.use(express.static(__dirname+'/public'));

app.listen(3000, function () {
  console.log("Running on port 3000");
});

//set up a default route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//test route
app.get('/test', function (req, res) {
  res.send("hello from the otherside");
});

//get toRead List
app.get('/toRead', function(req, res){
  ToRead.find().exec(function (err, toRead){
    res.send(toRead);
  });
});

//get alreadyRead
app.get('/alreadyRead', function(req, res){
  AlreadyRead.find().exec(function (err, alreadyRead){
    res.send(alreadyRead);
  });
});

//post toRead
app.post('/toRead', function (req, res){
  var toBeRead = new ToRead(req.body);
  toBeRead.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Book saved');
      res.send(toBeRead);
    }
  });
});

//post alreadyRead
app.post('/alreadyRead', function (req, res) {
  var alreadyRead = new AlreadyRead(req.body);
  alreadyRead.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Completed Bood saved');
      res.send(alreadyRead);
    }
  });
});

//delete toRead
app.delete('/toRead/:id', function (req, res) {
  ToRead.remove({_id: req.params.id}).exec(function (err, toRead){
    res.send(toRead);
  });
});

//delete alreadyRead
app.delete('/alreadyRead/:id', function (req, res) {
  AlreadyRead.remove({_id: req.params.id}).exec(function (err, done) {
    res.send(alreadyRead);
  });
});
