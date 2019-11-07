const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const MONGO_URI = "mongodb://csc648team11:648team11@ds052837.mlab.com:52837/gatorexchange";

mongoose.connect(MONGO_URI, {useNewUrlParser: true}).then(
  () =>{
    console.log("Connected to Mongo");
  },
  err => {
    console.log("Error Connecting to Mongo:");
    console.log(err);
  }
);

module.exports = mongoose.connection;