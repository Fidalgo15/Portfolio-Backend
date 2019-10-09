let  express = require('express');
let  router = express.Router();

const dummySkill = {
    _id: "123",
    name: "javascript",
    rank: "10"
}

router.get('/', (req, res, next) => res.json(dummySkill))

router.get('/:id', (req, res, next) => res.json(dummySkill))

router.post('/', (req, res,next) => res.json(dummySkill))

router.put('/:id', (req, res, next) => res.json(dummySkill))

router.delete('/:id', (req, res, next) => res.json(dummySkill))

module.exports = router;