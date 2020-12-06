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

    usuario.save((error, usuario) => {
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

const getUsuarioId = (request, response) =>{
    const idParams = request.params.id
    usuarioCollections.findById(idParams, (error,usuarioId) =>{
        if (error) {
            return response.status(500).send(error)
        } else{
            if(usuarioId){
                return response.status(200).send(usuarioId)
            } else {
                return response.status(404).send("Usuario não encontrado")
            }
        }
    })

}

const updateUsuario = (request, response) =>{
    const idParams = request.params.id
    const usuarioBody = request.body
    const atualizarUsuario = {new: true}

    usuarioCollections.findByIdAndUpdate(idParams, usuarioBody, atualizarUsuario, (error,usuario) =>{
        if(error){
            return response.status(500).send(error)
        }else {
            return response.status(200).send({
                messagem: 'Usuario atualizado com sucesso', 
                usuario
            })
        }
    })

}

const updateTelefone = (request, response) => {
    const idParams = request.params.id
    const telefoneBody = request.body
    const atualizar = {new: true} 

    usuarioCollections.findByIdAndUpdate(idParams, telefoneBody, atualizar, (error, usuario)=>{
        if(error){
            return response.status(500).send(error)
         }else if(usuario){
            return response.status(200).send({
                message: "O telefone foi atualizado com sucesso",usuario
         })

         }else {
            return response.status(404).send(" Ops! Telefone não encontrado")
        }
    })
}

const deleteUsuario = (request, response) =>{
    const idParams = request.params.id
    usuarioCollections.findByIdAndDelete(idParams, (error, usuarioId) =>{
        if(error){
            return response.status(500).send(error)
        } else if(usuarioId) { 
            return response.status(200).send({message: "Deletado com Sucesso"})

        }else {
            return response.status(404).send("Usuario não encontrado")
        }

    })
}
module.exports = {
    getAll , 
    addUsuario, 
    getUsuarioId, 
    updateUsuario, 
    updateTelefone, 
    deleteUsuario
}