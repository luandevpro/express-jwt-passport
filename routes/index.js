const express     = require("express")
      router      = express.Router()
   userControllers= require("../controllers/user.controllers")

router
   .route("/")
   .get(userControllers.home)

module.exports = router
