const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, index: true, unique: true, required: true },
  fullName: String,
  password: String,
  gender: String,
  phoneNumber:{ type: String, index: true, unique: true },
  penName:{ type: String, index: true, unique: true, required: true },
  birthDate:Date,
  profilePicture:String,
  genreFav:[String],
  bio:String,
  socialMedia:{
    facebook:String,
    instagram:String,
    twitter:String,
    tumblr:String
  },
  updated: { type: Date, default: Date.now },
  created: Date
},{strict: true});
let User = mongoose.model('User', userSchema);

module.exports = {
  User
};
