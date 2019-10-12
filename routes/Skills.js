let express = require('express');
let router = express.Router();
const Skill = require('../models/skill');

const dummySkill = {
    _id: "123",
    name: "javascript",
    rank: "10"
}

router.get('/', (req, res, next) => {
    Skill.find({}, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => res.json(dummySkill))

router.post('/', (req, res,next) => res.json(dummySkill))

router.put('/:id', (req, res, next) => res.json(dummySkill))

router.delete('/:id', (req, res, next) => res.json(dummySkill))

module.exports = router;