const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const project_schema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    screenshot: {
        type: String,
    }
});

const Project = mongoose.model('project', project_schema)
module.exports = Project