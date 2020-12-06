const express = require("express")
const router = express.Router()
const controller = require("../controllers/usuarioController")

//@router GET api/usuario

router.get("/", controller.getAll)
router.post("/cadUsuario",controller.addUsuario)

module.exports = router