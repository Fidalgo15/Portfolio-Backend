const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reference_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true
    },
    relation: {
        type: String,
        required: true
    }
});

const Reference = mongoose.model('reference', reference_schema)
module.exports = Reference