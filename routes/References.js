let express = require('express');
let router = express.Router();
const Reference = require('../models/reference');

const dummyReference = {
    _id: "123",
    name: "John Doe",
    phone: "555-123-4567",
    relation: "brother",
}

router.get('/', (req, res, next) => {
    Reference.find({}, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => res.json(dummyReference))

router.post('/', (req, res,next) => res.json(dummyReference))

router.put('/:id', (req, res, next) => res.json(dummyReference))

router.delete('/:id', (req, res, next) => res.json(dummyReference))

module.exports = router;