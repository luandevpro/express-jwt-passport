const express       = require("express")
      app           = express()
      port          = process.env.port || 3000
      User          = require("./models/user");
      passport      = require("passport")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

User.sync({force: false})

app.use(passport.initialize())

app.use("/",require("./routes"))
app.listen(port, () => console.log(`port`))
