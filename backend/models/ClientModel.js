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
    },
    link:{
        type: String,
    },
    instagramUser: {
        type: String,
    },
    facebookUser:{
        type: String,
    },
    instagramPassword: {
        type: String,
    },
    facebookPassword: {
        type: String,
    }

})

module.exports = mongoose.model('Client', clientSchema);