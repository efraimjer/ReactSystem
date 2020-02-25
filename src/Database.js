let mongoose = require ('mongoose');

let ProductModel = require ('./models/ProductModel');

const server = '127.0.0.1:27017';

class Database {
    constructor() {
        this._connect()
    }

    _connect(){
        mongoose.connect('mongodb://127.0.0.1:27017/DB_leteca')
        .then(()=>{
            console.log('Database connection succesful')
        })
        .catch(err => {
            console.error('Database connection error')
        })
    }

}

module.exports = new Database()

let msg = new ProductModel({
    code: '001',
    nome: 'Caneca branca',
    valor: '24.90',
    estoque: '26'
})

msg.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })