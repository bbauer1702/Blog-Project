var BlogPostModel = require('./../models/BlogPostModel.js');

module.exports =
{
  create: function (req, res, next){
    var post = new BlogPostModel(req.body);
    post.save(function(err, result){
      if(err) {
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },

  read: function (req, res, next){
    BlogPostModel
    .find()
    .exec(function(err, result){
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  update: function (req, res, next){
    BlogPostModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function (req, res, next) {
    BlogPostModel.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  readById: function (req, res, next) {
    BlogPostModel.findById(req.params.id, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};
