const express = require("express")
const router = express.Router()
const controller = require("../controllers/infoMeiController")

router.post("/add", controller.addInfoMEI)


module.exports= router