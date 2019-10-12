let express = require('express');
let router = express.Router();
const Education = require('../models/education');

const dummyEd = {
    _id: "123",
    school: "Bonneville HS",
    yearGraduated: "2008",
}

router.get('/', (req, res, next) => {
    Education.find({}, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => res.json(dummyEd))

router.post('/', (req, res,next) => res.json(dummyEd))

router.put('/:id', (req, res, next) => res.json(dummyEd))

router.delete('/:id', (req, res, next) => res.json(dummyEd))

module.exports = router;