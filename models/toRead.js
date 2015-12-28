var mongoose = require('mongoose');

var ToReadSchema = new mongoose.Schema({
  bookTitle: String
});

var ToRead = mongoose.model('ToRead', ToReadSchema);

module.exports = ToRead;
