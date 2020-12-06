const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const infoMeiSchema = new Schema ({
    usuarioId: {
        type: Schema.Types.ObjectId, 
        ref: 'usuario',
        required: true
    }, 
    titulo: {
        type: String, 
        required: true
    }, 
    descricao: {
        type: String, 
        required: true
    }, 
    link: {
        type: String, // aqui vai a URL do site oficial
        required: true
    },

})
    const infoMeicollections = mongoose.model('infoMei', infoMeiSchema)

    module.exports = infoMeicollections