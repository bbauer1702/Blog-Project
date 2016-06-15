var mongoose = require('mongoose');

var blogPostModel = new mongoose.Schema({
  postedBy: {type: String},
  title: {type: String},
  description: {type: String},
  client: {type: String},
  images: {type: Array},
  datePosted: {type: Date},
  postNumber: {type: Number},
  isPublished: {type: Boolean}
});

module.exports = mongoose.model('BlogPost', blogPostModel);
