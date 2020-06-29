/**
 * Created by h on 4/5/2020.
 */

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/EnergyApp');

module.exports = { mongoose };