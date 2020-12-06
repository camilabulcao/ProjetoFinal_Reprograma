const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const usuarioSchema =  new Schema ({
    _id: {
        type: mongoose.Schema.Types.ObjectId, //tipo de dado dentro do mongoose que é id
        auto: true, 
        required: true
    }, 
    nome: {
        type: String, 
        required:true
    }, 
    email:{ 
        type: String, 
        required: true
    }, 
    telefone:{
        type: String,
        required:true
    }, 
    senha:{
        type: String, 
        required: true
    }
})

const usuarioCollections = mongoose.model('usuario', usuarioSchema)

module.exports = usuarioCollections