let  express = require('express');
let  router = express.Router();

const dummyCatalog = {
    _id: "123",
    name: "P tag",
    description: "A tag that creates a paragragh in HTML",
    tags: "HTML",
}

router.get('/', (req, res, next) => res.json(dummyCatalog))

router.get('/:id', (req, res, next) => res.json(dummyCatalog))

router.post('/', (req, res,next) => res.json(dummyCatalog))

router.put('/:id', (req, res, next) => res.json(dummyCatalog))

router.delete('/:id', (req, res, next) => res.json(dummyCatalog))

module.exports = router;