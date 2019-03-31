const User = require("../models/user")
   bcrypt  = require("bcrypt")
   
exports.home = (req,res) => {
   res.json({message: "Hello World Web API"})
}

exports.signup = (req,res) => {
   User
      .findOne({where: {email: req.body.email}})
      .then(user => {
         if(user){
            res.status(400).json({message: "Email đã tồn tại"})
         }else{
            var newUser = {
               name: req.body.name,
               age: req.body.age,
               email: req.body.email,
               password: req.body.password,
            };
            bcrypt.hash(newUser.password , 10 ,function(err,hash){
               if(err){
                  res.json(err)
               }else{
                  newUser.password = hash;
                  User
                     .create(newUser)
                     .then(user => {
                        res.json(user)
                     })
                     .catch(err => res.send(err))
               }
            })
         }
      })
}