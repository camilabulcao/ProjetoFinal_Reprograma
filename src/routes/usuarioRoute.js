const express = require("express")
const router = express.Router()
const controller = require("../controllers/usuarioController")

//@router GET api/usuario

router.get("/", controller.getAll)
router.post("/cadUsuario",controller.addUsuario)
router.get("/id/:id", controller.getUsuarioId)
router.put("/atualizar/:id", controller.updateUsuario)
router.patch("/telefone/:id", controller.updateTelefone)
router.delete("/id/:id", controller.deleteUsuario)


module.exports = router