let  express = require('express');
let  router = express.Router();

const dummyProject = {
    _id: "123",
    name: "tic-tac-toe",
    link: "tic-tac-toe@github.com",
    screenshot: "picture of running project",
}

router.get('/', (req, res, next) => res.json(dummyProject))

router.get('/:id', (req, res, next) => res.json(dummyProject))

router.post('/', (req, res,next) => res.json(dummyProject))

router.put('/:id', (req, res, next) => res.json(dummyProject))

router.delete('/:id', (req, res, next) => res.json(dummyProject))

module.exports = router;