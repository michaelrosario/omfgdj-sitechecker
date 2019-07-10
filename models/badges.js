const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const badgeSchema = new Schema({
  badge_name: { type: String, required: true }, // Wappa: res.name
  badge_version: { type: String, required: false }, // W: res.version IMPT: some results are null so NOT REQUIRED
  badge_type: { type: String, required: true }, // W: res.version IMPT: some results are null so NOT REQUIRED
  badge_description: { type: String, required: false },
  badge_icon: { type: String, required: true}, // W: res.icon
  badge_component: { type: String, required: true},
  badge_category: { type: String, required: true}, // W: res.categories[0][0]
  badge_score: { type: Number, required: true }, // Our value (1)
},{
  collection: 'badges'
});

const Badges = mongoose.model("Badges", badgeSchema);

module.exports = Badges;