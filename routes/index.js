const express     = require("express")
      router      = express.Router()
   userControllers= require("../controllers/user.controllers")

router
   .route("/")
   .get(userControllers.home)

router
   .route("/api/users/signup")
   .post(userControllers.signup)

router
   .route("/api/users/signin")
   .post(userControllers.signin)

module.exports = router
