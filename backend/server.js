const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Product = require('./models/ProductModel')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/DB_leteca', {
    useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log("MongoDB database connection established!");
})

app.listen(PORT, function(){
    console.log("Server is running on Port: " + PORT);
});

const routes = express.Router();

app.use ('/products', routes);

routes.route('/').get(function(req, res){
    Product.find(function(err, products){
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });

});

routes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Product.findById(id, function(err, products){
        res.json(products);
    });
});

routes.route('/add').post(function(req, res){
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product': 'product added successfully'});
        })
        .catch(err =>{
            res.status(400).send('adding new product failed');
        });
});

{/*update does not work yet - FIX IT*/}
routes.route('/update/:id').post(function(req, res){
   Product.findById(req.params.id, function(err, product){
        if(!product){
            res.status(404).send("data is not found");
        }
        else{
            product.code = req.body.code;
            product.nome = req.body.nome;
            product.valor = req.body.valor;
            product.estoque = req.body.estoque;

            product.save().then(product => {
                rs.json('Product updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});