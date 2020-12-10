const express = require("express")
const router = express.Router()

router.get("/", function(request, response){
    response.status(200).send({
        titulo: "Seja bem-vinda (o) a API - InfoMEI!",
        version: "1.0.0"
    })
})

module.exports = router