const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  user_login: { type: String, required: true },
  user_password: { type: String, required: true },
  user_email: { type: String, required: true, unique: true },
  user_firstname: { type: String, required: true },
  user_lastname: { type: String, required: true },
  user_phone: { type: String, required: false },
  user_imgsrc: { type: String, required: false },
  user_github: { type: String, required: false },
  user_preference: { type: String, required: false },
  user_sites: [{
    _siteId: {
      type: Schema.Types.ObjectId,
      ref: 'Sites'
    }
  }]
});

userSchema.methods = {
  checkPassword: function (inputPassword) {
  return bcrypt.compareSync(inputPassword, this.user_password)
},
  hashPassword: plainTextPassword => {
  return bcrypt.hashSync(plainTextPassword, 10)
  }
} 

userSchema.pre('save', function (next) {
  if (!this.user_password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.user_password = this.hashPassword(this.user_password)
    next()
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;


