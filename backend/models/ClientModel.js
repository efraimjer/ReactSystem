let mongoose = require ('mongoose');

let clientSchema = new mongoose.Schema({
    code: {
        type: Number,
        unique: true,

    },
    nome: {
        type: String,
    },
    adress: {
        type: String,


    },
    telefone: {
        type: Number,

    }

})

module.exports = mongoose.model('Client', clientSchema);