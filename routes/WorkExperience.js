let  express = require('express');
let  router = express.Router();

const dummyWE = {
    _id: "123",
    jobTitle: "web developer",
    company: "helio",
    description: "build web pages",
    startDate: "01/01/2019",
    endDate: "present"
}

router.get('/', (req, res, next) => res.json({dummyWE}))

router.get('/:id', (req, res, next) => res.json({dummyWE}))

router.post('/', (req, res,next) => res.json({dummyWE}))

router.put('/:id', (req, res, next) => res.json({dummyWE}))

router.delete('/:id', (req, res, next) => res.json({dummyWE}))

module.exports = router;