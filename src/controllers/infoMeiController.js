const { response } = require("express")
const  express = require("express")
const infoMeicollections = require("../models/infoMeiSchema")
const infoMei = require("../models/infoMeiSchema")

const addInfoMEI = (request, response) =>{
    const infoMeiBody = request.body
    const infoMei = new infoMeicollections(infoMeiBody)

    infoMei.save((error) =>{
        if (error) {
            return response.status(400).send(error)
        } else{
            return response.status(200).send({
                mensagem: "Informação adicionada com sucesso",
                infoMei
            })
        }
    })
}

module.exports = {
    addInfoMEI
}