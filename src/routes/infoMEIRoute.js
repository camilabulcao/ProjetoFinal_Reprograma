const express = require("express")
const router = express.Router()
const controller = require("../controller/infoMEIController")

router.get("/", controller.getAll)

module.exports = router