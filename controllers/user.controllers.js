const User = require("../models/user")
   bcrypt  = require("bcrypt")
   jwt     = require("jsonwebtoken")
passportLocal = require("passport")

require("../config/passport-local")(passportLocal)

exports.home = (req,res) => {
   res.json({message: "Hello World Web API"})
}

exports.signup = (req,res) => {
   User
      .findOne({where: {email: req.body.email}})
      .then(user => {
         if(user){
            res.status(400).json({message: "Email đã tồn tại ."})
         }else{
            const newUser = {
               name: req.body.name,
               age: req.body.age,
               email: req.body.email,
               password: req.body.password
            }
            bcrypt.hash(newUser.password, 10, (err,hash) => {
               if(err){
                  res.json(err)
               }else{
                  newUser.password = hash
                  User
                     .create(newUser)
                     .then(user => res.json(user))
                     .catch(err => res.json(err))
               }
            })
         }
      })
}

exports.signin = (req, res) => {
   passportLocal.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
          return res.status(400).json({
              message: info ? info.message : 'Login failed',
              user   : user
          });
      }
      req.login(user, {session: false}, (err) => {
         if (err) {
            res.send(err);
         }{
            const payload = {
               id: user.id,
               name: user.name,
               email: user.email
            }
            jwt.sign(payload, "ILovePokemon" , {expiresIn: "1h"} , function(err,token){
               if(err){
                  return res.json(err)
               }else{
                  return res.json({user, token});
               }
             });
         }
      });
  })(req,res)
};

exports.getUser = async (req,res) => {
   const user = await req.user;
   res.json(user)
}