const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./configs/database")

const index = require("./routes/index")
const usuario = require("./routes/usuarioRoute")
const infoMei = require("./routes/infoMeiRoute")


db.connect()

app.use(cors())
app.use(express.json()) 



app.use("/", index) // rotas raízes
app.use("/usuario", usuario) 
app.use("/infoMei", infoMei)
module.exports = app
