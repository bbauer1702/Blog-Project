var mongoose = require('mongoose');

var PortfolioModel = new mongoose.Schema({
  postedBy: {type: String},
  title: {type: String, required: true},
  description: {type: String, required: true},
  client: {type: String},
  images: {type: Array, required: true},
  datePosted: {type: Date},
  postNumber: {type: Number},
  isPublished: {type: Boolean},
  linkTo: {type: String}
});

module.exports = mongoose.model('BlogPost', PortfolioModel);
