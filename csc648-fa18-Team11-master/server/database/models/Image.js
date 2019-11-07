const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url:String
})

let Image = mongoose.model('images', imageSchema);

module.exports = Image;

