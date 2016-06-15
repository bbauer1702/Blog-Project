var mongoose = require('mongoose');

var commentModel = new mongoose.Schema({
  author: {type: String},
  title: {type: String},
  content: {type: String},
  datePosted: {type: Date}
});

module.exports = mongoose.model('Comment', commentModel);
