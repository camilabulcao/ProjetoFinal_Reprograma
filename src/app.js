const express = require("express")
const app = express()
const cors = require("cors")


app.use(cors())
app.use(express.json()) 

const index = require("./routes/index")
//const infoMEI = require("./routes/infoMEIRoute")

app.use("/", index) // rotas raízes
//app.use("/infoMEI", infoMEI) 

module.exports = app
