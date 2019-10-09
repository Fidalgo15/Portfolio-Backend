let  express = require('express');
let  router = express.Router();

const dummyReference = {
    _id: "123",
    name: "John Joe",
    phone: "555-123-4567",
    relation: "brother",
}

router.get('/', (req, res, next) => res.json(dummyReference))

router.get('/:id', (req, res, next) => res.json(dummyReference))

router.post('/', (req, res,next) => res.json(dummyReference))

router.put('/:id', (req, res, next) => res.json(dummyReference))

router.delete('/:id', (req, res, next) => res.json(dummyReference))

module.exports = router;