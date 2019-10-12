const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const education_schema = new Schema({
    school: {
        type: String,
        required: true
    },
    year_graduated: {
        type: Number,
        required: true
    }
});

const Education = mongoose.model('education', education_schema)
module.exports = Education