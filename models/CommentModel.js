var mongoose = require('mongoose');

var commentModel = new mongoose.Schema({
  postedBy: {type: String},
  postedById: {type: String},
  title: {type: String},
  content: {type: String, required: true},
  datePosted: {type: Date},
  attachToPostId: {type: String, required: true}
});

module.exports = mongoose.model('Comment', commentModel);
