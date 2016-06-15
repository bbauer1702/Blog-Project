var UserModel = require('./../models/UserModel.js');

module.exports = {
  create: function (req, res, next){
    var user = new UserModel(req.body);
    user.save(function(err,result){
      if(err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  read: function (req, res, next){
    UserModel.find().exec(function(err, result){
      if(err){
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  update: function (req, res, next){
    UserModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  delete: function (req, res, next){
    UserModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },

  readById: function (req, res, next) {
    UserModel.findbyId(req.params.id, function(err, result) {
      if (err) {
        res.send(err)
      } else {
        res.send(result)
      }
    });
  }
};
