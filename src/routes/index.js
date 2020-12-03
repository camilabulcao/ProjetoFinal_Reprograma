const express = require("express")
const router = express.Router()

router.get("/", function(request, response){
    response.status(200).send({
        titulo: "InfoMEI - Informações sobre abertura de empresa na categoria MEI",
        version: "1.0.0"
    })
})

module.exports = router