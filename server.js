const express       = require("express")
      app           = express()
      port          = process.env.port || 3000
 
app.use("/",require("./routes"))
app.listen(port, () => console.log(`port`))