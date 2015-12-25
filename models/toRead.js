var mongoose = require('mongoose');

var ToReadSchema = new mongoose.Schema({
  toRead: String
});

var ToRead = mongoose.model('ToRead', ToReadSchema);

module.exports = ToRead;
