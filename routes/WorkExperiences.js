let express = require('express');
let router = express.Router();
const Work = require('../models/workExperience');

const dummyWE = {
    _id: "123",
    jobTitle: "web developer",
    company: "helio",
    description: "build web pages",
    startDate: "01/01/2019",
    endDate: "present"
}

router.get('/', (req, res, next) => {
    Work.find({}, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
        console.log('regular get end')
    });
});

router.get('/:id', (req, res, next) => {
    console.log('hello')
    res.json(dummyWE)
console.log('bye')})


router.post('/', (req, res,next) => res.json(dummyWE))

router.put('/:id', (req, res, next) => res.json(dummyWE))

router.delete('/:id', (req, res, next) => res.json(dummyWE))

module.exports = router;