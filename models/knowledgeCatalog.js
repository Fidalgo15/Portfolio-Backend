const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catalog_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Catalog = mongoose.model('catalog', catalog_schema)
module.exports = Catalog