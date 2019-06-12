var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DesignSchema = new Schema({
    framework: {type: string, required: true},
    fonts: {type: boolean, required: true},
    responsive: {type: boolean, required: true},
    floats: {type: boolean, required: true}
});

var Design = mongoose.model("Design", DesignSchema);

module.exports = Design;

  
  