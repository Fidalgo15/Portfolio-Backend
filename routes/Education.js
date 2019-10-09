let  express = require('express');
let  router = express.Router();

const dummyEd = {
    _id: "123",
    school: "Bonneville HS",
    yearGraduated: "2008",
}

router.get('/', (req, res, next) => res.json(dummyEd))

router.get('/:id', (req, res, next) => res.json(dummyEd))

router.post('/', (req, res,next) => res.json(dummyEd))

router.put('/:id', (req, res, next) => res.json(dummyEd))

router.delete('/:id', (req, res, next) => res.json(dummyEd))

module.exports = router;