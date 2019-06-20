const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const badgeSchema = new Schema({
  badge_name: { type: String, required: true },
  badge_description: { type: String, required: true},
  badge_score: { type: Number, required: true },
  badge_icon: {type: String, required: true},
});

const Badges = mongoose.model("Badges", badgeSchema);

module.exports = Badges;