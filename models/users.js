const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id :Number,
  name :String,
  email : String,
  password: String,
  age:Number,
  


});

const User = mongoose.model('User', userSchema);

module.exports = User;
