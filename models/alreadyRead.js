var mongoose = require('mongoose');

var AlreadyReadSchema = new mongoose.Schema({
  done: String
});

var AlreadyRead = mongoose.model('AlreadyRead', AlreadyReadSchema);

module.exports = AlreadyRead;
