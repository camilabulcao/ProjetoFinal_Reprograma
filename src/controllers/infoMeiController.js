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

const updateInfoMEI = (request, response) =>{
    const idParams = request.params.id
    const infoMeiBody = request.body
    const atualizarInfoMei = {new: true}

    infoMeicollections.findByIdAndUpdate(idParams, infoMeiBody, atualizarInfoMei, (error, infoMei)=>{
        if(error){
            return response.status(500).send(error)
        } else{
            return response.status(200).send({
                mensagem: 'Informação sobre o MEI atualizada com sucesso',
                infoMei
    } )
        }

    })
}

const getAll = (request, response) => {
    

    infoMeicollections.find((error, infoMei) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: "GET com sucesso",
                infoMei
            })
        }
    })
}

const deleteInfoMei = (request, response) => {
    const idParams = request.params.id
    infoMeicollections.findByIdAndDelete(idParams, (error, infoMeiID) =>{
        if (error) {
            return response.status(500).send(error)
        } else {
            if (infoMeiID) {
                return response.status(200).send("Informação sobre o MEI deletada com sucesso")
            } else {
                return response.status(404).send("Informação sobre o MEI não encontrada")
            }
        }
    })

}

const getByTitulo = (request, response) =>{
    const tituloParams = request.params.titulo
    infoMeicollections.findOne({titulo: tituloParams}, (error, infoMei) =>{
        if (error) { 
            return response.status(500).send(error) 
        } else if (infoMei) {
                     return response.status(200).send(infoMei) 
             } else {
                return response.status(400).json({ mensagem: 'Ops titulo não encontrado!', })
                } 
    })

}

module.exports = {
    addInfoMEI, 
    updateInfoMEI, 
    getAll, 
    deleteInfoMei,
    getByTitulo
}