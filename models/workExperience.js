const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const work_schema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
    }
});

const Work = mongoose.model('work', work_schema)
module.exports = Work