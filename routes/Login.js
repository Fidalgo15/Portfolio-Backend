let  express = require('express');
let  router = express.Router();

const dummyLogin = {
    _id: "123",
    email: "hello@gmail.com",
    cell: "555-123-4567",
    password: "*****",
    firstName: "devin",
    lastName: "sherman"
}

router.get('/', (req, res, next) => res.json({dummyLogin}))

router.get('/:id', (req, res, next) => res.json({dummyLogin}))

router.post('/', (req, res,next) => res.json({dummyLogin}))

router.put('/:id', (req, res, next) => res.json({dummyLogin}))

router.delete('/:id', (req, res, next) => res.json({dummyLogin}))

module.exports = router;