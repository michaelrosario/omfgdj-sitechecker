const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  user_login: { type: String, required: true },
  user_password: { type: String, required: true },
  user_email: { type: String, required: true },
  user_firstname: { type: String, required: true },
  user_lastname: { type: String, required: true },
  user_imgsrc: { type: String, required: true },
  user_github: { type: String, required: true },
  user_preference: { type: String, required: true }
});

const Sites = mongoose.model("Sites", siteSchema);

module.exports = User;