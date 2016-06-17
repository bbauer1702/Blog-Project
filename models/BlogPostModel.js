var mongoose = require('mongoose');

var BlogPostModel = new mongoose.Schema({
  postedBy: {type: String},
  posterEmail: {type: String},
  title: {type: String, required: true},
  article: {type: String, required: true},
  images: {type: Array},
  datePosted: {type: Date},
  postNumber: {type: Number},
  isPublished: {type: Boolean}
});

module.exports = mongoose.model('BlogPost', BlogPostModel);
