const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require('mongoose');
const PORT = 5000;

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

app.use ('/clients', routes);

routes.route('/').get(function(req, res){
    Client.find(function(err, clients){
        if (err) {
            console.log(err);
        } else {
            res.json(clients);
        }
    });

});

routes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Client.findById(id, function(err, clients){
        res.json(clients);
    });
});

routes.route('/add').post(function(req, res){
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
routes.route('/update/:id').post(function(req, res){
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

