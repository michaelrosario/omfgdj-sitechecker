const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const badgeSchema = new Schema({
  badge_name: { type: string, required: true },
  badge_description: { type: string, required: true},
  badge_score: { type: num, required: true },
  badge_icon: {type: string, required: true},
});

const Badges = mongoose.model("Badges", badgeSchema);

module.exports = Badges;