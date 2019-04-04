const express     = require("express")
      router      = express.Router()
   userControllers= require("../controllers/user.controllers")
   middleware     = require("../middleware/isAuth")
   passport       = require("passport")

router
   .route("/")
   .get(userControllers.home)

router
   .route("/api/users/signup")
   .post(userControllers.signup)

router
   .route("/api/users/signin")
   .post(userControllers.signin)

router
   .route("/api/users/profile")
   .get(middleware.isAuth,userControllers.getUser)

router
   .route("/api/users/current")
   .get(userControllers.getUserCurrent)

module.exports = router
