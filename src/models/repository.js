const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/Reprograma"  //criando a url da conexão com o mongo

const connect = () =>{
    mongoose.connect(DB_URL, {useNewUrlParser: true})
    const connection = mongoose.connection
    connection.on('error', () => console.error('Erro ao se conectar'))
    connection.once('open', () => console.log('Conectamos no Mongo'))
}

module.exports = { connect }

//O arquivo repository cria conexão com o banco de dados (MongoDB)