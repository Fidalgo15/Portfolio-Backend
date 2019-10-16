let express = require('express');
let router = express.Router();
const Project = require('../models/project');

router.get('/', (req, res, next) => {
    Project.find({}, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => {
    Project.findById(req.params.id, function(err, data){
        if(err){
            return res.json({error:"500", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.post('/', (req, res,next) => {
    Project.create(req.body, function(err, data){
        if(err){
            return res.json({error: "500", message: "couldn't create."})
        }
        res.json(data)
    });
});

router.put('/:id', (req, res, next) => {
    Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, data){
        if(err){
            return res.json({error: "500", message: "couldn't update."})
        }
        res.json(data);
    });
        
});

router.delete('/:id', (req, res, next) => {
    Project.findByIdAndDelete(req.params.id, function(err, data){
        if(err){
            return res.json({error: "500", message: "didn't delete."})
        }
        res.json(data);
    });
});

module.exports = router;