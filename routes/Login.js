const express = require('express');
const router = express.Router();
const User = require('../models/user');

const dummyLogin = {
    _id: "123",
    email: "hello@gmail.com",
    cell: "555-123-4567",
    password: "*****",
    firstName: "devin",
    lastName: "sherman"
}

router.get('/', (req, res, next) => {
    console.log('get working')
    User.find({}, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => {
    User.findById(id, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.post('/', (req, res,next) => {
    User.create({}, function(err, data){
        if(err){
            return res.json({error: "invalid", message: "couldn't create."})
        }
        res.json(data)
    });
});

router.put('/:id', (req, res, next) => {
    User.findByIdAndUpdate(id, update, function(err, data){
        if(err){
            return res.json({error: "invalid", message: "couldn't update."})
        }
        res.json(data);
    });
        
});

router.delete('/:id', (req, res, next) => {
    User.findByIdAndDelete(id, function(err, data){
        if(err){
            return res.json({error: "invalid", message: "didn't delete."})
        }
        res.json(data);
    });
});

module.exports = router;