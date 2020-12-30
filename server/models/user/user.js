const mongoose = require('mongoose');
const { Schema } = mongoose;

var userSchema = new Schema({
  username: {type: String},
  password: {type: String}
},{
  versionKey: false
})

module.exports = mongoose.model('User', userSchema, 'users')