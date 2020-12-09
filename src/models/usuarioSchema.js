const mongoose = require ("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

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
        required:true, 
        unique: true, 
        lowercase: true //para forçar tudo ser minusculo
    }, 
    senha:{
        type: String, 
        required: true, 
        select: false //para não vim a informação da senha quando buscarmos na base de dados

    }, 
    createdAt:{
        type: Date,
        default:Date.now
    }
})

usuarioSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash; 

    next();
})

const usuarioCollections = mongoose.model('usuario', usuarioSchema)

module.exports = usuarioCollections