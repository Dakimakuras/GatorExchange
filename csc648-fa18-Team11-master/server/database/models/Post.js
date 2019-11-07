const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: String,
  description: String,
  price: Number,
  username: String,
  title: String,
  category: String,
  status: {type: Boolean, default: false}

})

let Post = mongoose.model('Post', postSchema);

module.exports = Post;

