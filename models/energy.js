/**
 * Created by h on 6/29/2020.
 */
let mongoose = require('mongoose');
let Energy = mongoose.model('Energy', {
    electricity: {
        type: String,
        required: true
    },
    water: {
        type: String,
        required: true
    },
    gas: {
        type: String,
        required: true
    },
    solar: {
        type: String,
        required: true
    },
    co2: {
        type: String,
        required: true
    }
});
module.exports = {Energy};