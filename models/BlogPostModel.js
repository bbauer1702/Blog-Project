var mongoose = require('mongoose');

var blogPostModel = new mongoose.Schema({
  postedBy: {type: String},
  title: {type: String},
  content: {type: String},
  images: {type: Array},
  datePosted: {type: Date},
  postNumber: {type: Number},
  isPublished: {type: Boolean}
});

module.exports = mongoose.model('BlogPost', blogPostModel);
