// User Schema
const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');


const UserSchema = new mongoose.Schema({
  username:{ type: String, unique: true, required: true},
  password: { type: String, unique: false, required: true},
  email: String,
  admin: {type: Boolean, default: false},
  sfsuId: Number,
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Messages"
    }
  ]
});

UserSchema.methods = {
  checkPassword: function(inputPassword){
    return bcryptjs.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcryptjs.hashSync(plainTextPassword, 10);
  }
}
//Calls this function before a new user is saved into the database. It checks
// for empty password field, and it also hashes the password.
UserSchema.pre('save', function(next) {
  if(!this.password) {
    console.log("No Password Provided.")
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
})


module.exports = mongoose.model("Users", UserSchema);
