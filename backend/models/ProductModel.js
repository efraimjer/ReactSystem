let mongoose = require ('mongoose');

let productSchema = new mongoose.Schema({
    code: {
        type: Number,

    },
    nome: {
        type: String,


    },
    valor: {
        type: Number,


    },
    estoque: {
        type: Number,

    }

})

module.exports = mongoose.model('Product', productSchema);