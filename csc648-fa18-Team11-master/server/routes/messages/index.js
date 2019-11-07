const express = require("express");
const router = express.Router({mergeParams: true});
//const bodyParser = require('body-parser');
const User = require("../../database/models/Users");
const Message = require("../../database/models/Messages");
const sanitize = require("mongo-sanitize");

//Create new Message

router.post("/", (req,res) =>{
  let username = sanitize(req.body.username);
  let subject = sanitize(req.body.subject);
  let text = sanitize(req.body.text);
  let sentFrom = sanitize(req.user.username);

  let newMessage = new Message ({
    text: text,
    subject: subject,
    username: username,
    sentFrom: sentFrom
  })
  newMessage.save((err, savedMessage) =>{
    if(err) throw err;
    else {
      res.json(savedMessage);
    }
  })

  User.findOneAndUpdate(
    {username: username},
    {$push: {messages: newMessage}}
    ,
    (err, response)=>{
      if(err) console.log(err);
      //console.log(response);
    });
})

//Get Messages
router.get("/allMessages", (req, res) => {
  let username = sanitize(req.user.username);
  console.log(username);
  User.findOne({username: username}).populate("messages").exec(function(err, user){
    if(err){
      console.log(err);
    } else {
      res.json(user.messages);
    }
  })
})



module.exports = router;

