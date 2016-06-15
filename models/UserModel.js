var mongoose = require('mongoose');

var userModel = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  isAdmin: {type: Boolean},
  email: {type: mongoose.SchemaTypes.Email, required: true},
  password: {type: String},
  posts: {type: Array},
  dateRegistered: {type: Date},
  location: {type: String}
});

module.exports = mongoose.model('User', userModel);
