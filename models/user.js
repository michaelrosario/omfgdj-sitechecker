const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_login: { type: String, required: true },
  user_password: { type: String, required: true },
  user_email: { type: String, required: true },
  user_firstname: { type: String, required: true },
  user_lastname: { type: String, required: true },
  user_phone: { type: String, required: true },
  user_imgsrc: { type: String, required: true },
  user_github: { type: String, required: true },
  user_preference: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;


