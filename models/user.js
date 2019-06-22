const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  user_login: { type: String, required: true },
  user_password: { type: String, required: true },
  user_email: { type: String, required: true },
  user_firstname: { type: String, required: true },
  user_lastname: { type: String, required: true },
  user_phone: { type: String, required: true },
  user_imgsrc: { type: String, required: true },
  user_github: { type: String, required: true },
  user_preference: { type: String, required: true },
  user_sites: [{
      type: Schema.Types.ObjectId,
      ref: "Sites" 
  }]
});

userSchema.methods = {
  checkPassword: function (inputPassword) {
  return bcrypt.compareSync(inputPassword, this.password)
},
  hashPassword: plainTextPassword => {
  return bcrypt.hashSync(plainTextPassword, 10)
  }
} 

userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;


