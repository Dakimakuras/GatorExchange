var mongoose = require("mongoose");

var messageSchema = mongoose.Schema({
  text: String,
  subject: String,
  createdAt: {type: Date, default: Date.now},
  username: String,
  sentFrom: String
})


module.exports = mongoose.model("Messages", messageSchema);