const mongoose = require("mongoose")
 //criando a url da conexão com o mongo
const dotenv = require('dotenv') // inserir recente

dotenv.config()

const DB_URI = process.env.DB_URI

const connect = () =>{
    mongoose.connect(DB_URI, {useNewUrlParser: true, 
        useUnifiedTopology: true, // coloquei pela aula de sábado dia 05
        useCreateIndex: true,  //serve para tratar erros que possam ter com as versões do mongo
        useFindAndModify: false})
    const connection = mongoose.connection
    connection.on('error', () => console.error('Erro ao se conectar'))
    connection.once('open', () => console.log('Conectamos no Mongo'))
}

module.exports = { connect }

