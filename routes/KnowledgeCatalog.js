let express = require('express');
let router = express.Router();
const Catalog = require('../models/knowledgeCatalog');

const dummyCatalog = {
    _id: "123",
    name: "P tag",
    description: "A tag that creates a paragragh in HTML",
    tags: "HTML",
}

router.get('/', (req, res, next) => {
    Catalog.find({}, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => res.json(dummyCatalog))

router.post('/', (req, res,next) => res.json(dummyCatalog))

router.put('/:id', (req, res, next) => res.json(dummyCatalog))

router.delete('/:id', (req, res, next) => res.json(dummyCatalog))

module.exports = router;