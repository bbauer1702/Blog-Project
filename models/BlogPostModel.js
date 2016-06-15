var mongoose = require('mongoose');

var blogPostModel = new mongoose.Schema({
  postedBy: {type: String},
  postedById: {type: String},
  title: {type: String, required: true},
  article: {type: String, required: true},
  images: {type: Array},
  datePosted: {type: Date},
  postNumber: {type: Number},
  isPublished: {type: Boolean}
});

module.exports = mongoose.model('BlogPost', blogPostModel);
