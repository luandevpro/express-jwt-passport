const express       = require("express")
      app           = express()
      port          = process.env.port || 3000
      db            = require("./utils/database")
      User          = require("./models/user")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

db
   .authenticate()
   .then(() => console.log("sucesss"))
   .catch(err => console.log(err))

User.sync({force: false})

app.use("/",require("./routes"))
app.listen(port, () => console.log(`port`))