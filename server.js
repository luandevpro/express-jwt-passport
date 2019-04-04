const express       = require("express")
      app           = express()
      port          = process.env.port || 3000
      db            = require("./utils/database")
      User          = require("./models/user")
      passport      = require("passport")

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(passport.initialize())

User
   .sync({force: false})
   .then(() => console.log("tao table success"))
   .catch(err => console.log(err))

app.use("/",require("./routes"))

db
   .authenticate()
   .then(() => {
      console.log("sucesss")
   })
   .catch(err => console.log(err))
   
app.listen(port, () => console.log(`port`))