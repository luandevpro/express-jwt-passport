const User = require("../models/user")
   bcrypt  = require("bcrypt")

exports.home = (req,res) => {
   res.json({message: "Hello World Web API"})
}

exports.signup = (req,res) => {
   User
      .findOne({email: req.body.email})
      .then(user => {
         if(user){
            return res.status(400).json({message: "Email đã tồn tại !!!"})
         }else{
            const newUser = new User({
               username: req.body.username,
               age: req.body.age,
               email: req.body.email,
               password: req.body.password,
            })
            bcrypt.hash(newUser.password, 10 , function(err,hash){
               if(err){
                  return res.json(err)
               }else{
                  newUser.password = hash
                  newUser
                     .save()
                     .then(user => {
                        res.json(user)
                     })
                     .catch(err => res.json(err))
               }
            })
         }
      })
}