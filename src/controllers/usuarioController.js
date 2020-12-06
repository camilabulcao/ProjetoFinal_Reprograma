const { response } = require("express")
const express = require("express")
const usuarioCollections = require("../models/usuarioSchema")

const getAll = (request, response)=>{
    console.log(request.url)

    usuarioCollections.find((error, usuario) =>{
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).json({
               mensagem: "Get com sucesso", usuario
            })
        }
    })
}

const addUsuario = (request, response) => {
    const usuarioBody = request.body //pegando o body que o usuario digitou
    const usuario = new usuarioCollections(usuarioBody) //criando um novo dado para o body

    usuario.save((error) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(200).send({
                mensagem: "POST com sucesso",
                usuario
            })
        }
    })
}
module.exports = {
    getAll , 
    addUsuario
}