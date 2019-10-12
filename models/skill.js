const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skill_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    }
});

const Skill = mongoose.model('skill', skill_schema)
module.exports = Skill