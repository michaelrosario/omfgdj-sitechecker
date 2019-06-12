var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HtmlSchema = new Schema({
    broken: {type: boolean, required: true},
    version: {type: num, required: true},
    iframe: {type: boolean, required: true},
    video: {type: string, required: true},
    language: {type: string, required: true}
});

var Html = mongoose.model("Html", HtmlSchema);

module.exports = Html;

  
  