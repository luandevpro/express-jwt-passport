const express       = require("express")
      app           = express()
      port          = process.env.port || 8080
      dotEnv        = require("dotenv")
      mongoose      = require("mongoose")
      passport      = require("passport")

dotEnv.config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose
   .connect(process.env.URI_DB , { useNewUrlParser: true })
   .then(() => console.log("connect database success"))
   .catch(err => console.log(err))

app.use(passport.initialize())

app.use("/",require("./routes"))

app.listen(port, () => console.log(`port`))