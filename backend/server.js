const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Product = require('./models/ProductModel')
let Client = require('./models/ClientModel')


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

{/*Finding all the products*/}
routes.route('/').get(function(req, res){
    Product.find(function(err, products){
        if (err) {
            console.log(err);
        } else {
            res.json(products);
        }
    });

});

{/*Finding a product by its _id*/}
routes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Product.findById(id, function(err, products){
        res.json(products);
    });
});

{/*Finding a product by a part of its name*/}
routes.route('/findByName/:name').get(function(req, res){
    let data = req.params.name;

    Product.findOne({'nome': {$regex: data, $options: 'i'}}, function(err, products){
        res.json(products);
        
    });
});

{/*Finding a product by its code*/}
routes.route('/findByCode/:name').get(function(req, res){
    let data = req.params.name;

    Product.findOne({'code': data}, function(err, products){
        res.json(products);
        
    });
});

{/*Saving a new product*/}
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

{/*------------------------Clint Server---------------------------- */}


const routes2 = express.Router();

app.use ('/clients', routes2);


routes2.route('/').get(function(req, res){
    Client.find(function(err, clients){
        if (err) {
            console.log(err);
        } else {
            res.json(clients);
        }
    });

});

routes2.route('/:id').get(function(req, res){
    let id = req.params.id;
    Client.findById(id, function(err, clients){
        res.json(clients);
    });
});

routes2.route('/add').post(function(req, res){
    let client = new Client(req.body);
    client.save()
        .then(client => {
            res.status(200).json({'client': 'client added successfully'});
        })
        .catch(err =>{
            res.status(400).send('adding new client failed');
        });
});

{/*update does not work yet - FIX IT*/}
routes2.route('/update/:id').post(function(req, res){
   Client.findById(req.params.id, function(err, client){
        if(!client){
            res.status(404).send("data is not found");
        }
        else{
            client.code = req.body.code;
            client.nome = req.body.nome;
            client.valor = req.body.adress;
            client.estoque = req.body.telefone;

            client.save().then(client => {
                rs.json('Client updated');
            })
            .catch(err => {
                res.status(400).send("Client not possible");
            });
        }
    });
});

routes2.route('/findClientByName/:name').get(function(req, res){
    let data = req.params.name;

    Client.findOne({'nome': {$regex: data, $options: 'i'}}, function(err, clients){
        res.json(clients);
        
    });
});

routes2.route('/findClientByCode/:name').get(function(req, res){
    let data = req.params.name;

    Client.findOne({'code': data}, function(err, clients){
        res.json(clients);
        
    });
});