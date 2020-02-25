let mongoose = require ('mongoose');

let productSchema = new mongoose.Schema({
    code: {
        type: Number,
        required: true,
        unique: true,
    },
    nome: {
        type: String,
        required: true,
        unique: true,
    },
    valor: {
        type: Number,
        required: true,

    },
    estoque: {
        type: Number,
        required: true,
    }

})

module.exports = mongoose.model('products', productSchema);