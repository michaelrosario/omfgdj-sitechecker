var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SeoSchema = new Schema({
    meta: {type: boolean, required: true},
    links: {type: string, required: true},
    graph: {type: boolean, required: true},
    json: {type: boolean, required: true},
    analytics: {type: boolean, required: true},
    httpReq: {type: Number, required: true}
});

var Seo = mongoose.model("Seo", SeoSchema);

module.exports = Seo;

  
  