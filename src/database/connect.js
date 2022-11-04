const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@curso-node-js.xatbsk0.mongodb.net/database?retryWrites=true&w=majority`, 
    (error) => {
        if(error) {
            console.log('Ocorreu um erro ao se conectar com o banco de dados', error)
        }

        return console.log('Conectado!')
    })
}

module.exports = connectToDatabase;