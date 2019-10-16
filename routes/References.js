let express = require('express');
let router = express.Router();
const Reference = require('../models/reference');

router.get('/', (req, res, next) => {
    Reference.find({}, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => {
    Reference.findById(req.params.id, function(err, data){
        if(err){
            return res.json({error:"500", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.post('/', (req, res, next) => {
    Reference.create(req.body, function(err, data){
        if(err){
            return res.json({error: "500", message: "couldn't create."})
        }
        res.json(data)
    });
});

router.put('/:id', (req, res, next) => {
    Reference.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, data){
        if(err){
            return res.json({error: "500", message: "couldn't update."})
        }
        res.json(data);
    });
        
});

router.delete('/:id', (req, res, next) => {
    Reference.findByIdAndDelete(req.params.id, function(err, data){
        if(err){
            return res.json({error: "500", message: "didn't delete."})
        }
        res.json(data);
    });
});

module.exports = router;