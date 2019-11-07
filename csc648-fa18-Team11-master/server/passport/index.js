const passport = require('passport');
const LocalStrategy = require('./localStrategy')
const User = require('../database/models/Users');


passport.serializeUser((user,done)=> {
  console.log("Serialized User");
  done(null, {_id: user._id});
});

passport.deserializeUser((id, done) =>{
  User.findOne( 
    {_id: id},
    'username admin',
    (err,user)=>{
      console.log("Deserialized user");
      done(null, user);
    }
  )
})

passport.use(LocalStrategy);
module.exports = passport;