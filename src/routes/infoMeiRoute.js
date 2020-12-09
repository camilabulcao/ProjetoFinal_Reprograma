const express = require("express")
const router = express.Router()
const controller = require("../controllers/infoMeiController")


/**
@route POST
@desc adiciona as informações sobre o MEI 
@access Public 
@endpoint http://localhost:porta/api/infoMei
**/

router.post("/add", controller.addInfoMEI)
router.put("/atualizar/:id", controller.updateInfoMEI)
router.get("/",controller.getAll)
router.delete("/id/:id", controller.deleteInfoMei)
router.get("/titulo/:titulo", controller.getByTitulo)

module.exports= router