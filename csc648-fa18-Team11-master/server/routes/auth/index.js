/**
 * This is the index file for handling all user authentication routing
 */

const express = require("express");
const router = express.Router();
const User = require("../../database/models/Users");
const passport = require("../../passport");
const sanitize = require("mongo-sanitize");
const bodyParser = require('body-parser');
//Get user information.
router.get("/user", (req, res) => {
  if (req.user) {
    return res.json({ user: req.user, admin: req.user.admin });
  } else {
    return res.json({ user: null });
  }
});

//User login
router.post(
  "/user/login",
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("Logged in")
    res.json({username: req.user.username})
  }
);

//User Logout
router.post('/user/logout', (req, res) => {
  if(req.user) {
    req.session.destroy()
    res.clearCookie('connect.sid')
    return res.json({msg: "Logging you out"})
  } else {
    return res.json({msg: "No user logged in"})
  }
})

//Handling sign up
router.post('/user/signup', (req, res) =>{
  console.log(req.body);
  const {username, email, sfsuId} = sanitize(req.body)
  User.findOne({username: username}, (err, user) =>{
    if(user){
      return res.json({error: `Already user with username ${username}`})
    }
    
    let newUser = new User ({
      username: username,
      password: req.body.password,
      email: email,
      sfsuId: sfsuId
    })
    newUser.save((err, savedUser) =>{
      if(err) return res.json(err)
      else{
        res.json(savedUser)
      }
    })
  })
})


module.exports = router