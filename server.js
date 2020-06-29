/**
 * Created by h on 6/29/2020.
 */
var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Energy } = require('./models/energy');
// var { Todo } = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/energy', (req, res) => {

    let energy = new Energy({
        electricity: req.body.electricity,
        water: req.body.electricity,
        gas: req.body.electricity,
        solar: req.body.electricity,
        co2: req.body.electricity
    });

    energy.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/energy', (req, res) => {
    Energy.findOne().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});

module.exports = { app };