const app = require("./src/app")
const dotenv = require('dotenv') // inserir recente

dotenv.config() // inserir recente

const PORT = process.env.PORT || 3030;

//const PORT = 3030

app.listen(PORT, function(){
    console.log(`O APP ta rodando na porta ${PORT}`)
})