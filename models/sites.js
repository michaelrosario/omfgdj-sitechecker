const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
  site_name: { type: String, required: true },
  site_url: { type: String, required: true },
  site_protocol: { type: String, default: 'https' },
  site_desc: { type: String, required: true },
  site_imgsrc: { type: String, required: false },
  site_lastSave : { type: Number, default: (new Date()).getTime() },
  site_badges:[
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Badges'
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }
});

const Sites = mongoose.model("Sites", siteSchema);

module.exports = Sites;