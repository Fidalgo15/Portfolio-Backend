let express = require('express');
let router = express.Router();
const Work = require('../models/workExperience');

router.get('/', (req, res, next) => {
    Work.find({}, function(err, data){
        if(err){
            return res.json({error:"invalid", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => {
    Work.findById(req.params.id, function(err, data){
        if(err){
            return res.json({error:"500", message: "didn't receive data."})
        }
        res.json(data);
    });
});

router.post('/', (req, res,next) => {
    Work.create(req.body, function(err, data){
        if(err){
            return res.json({error: "500", message: "couldn't create."})
        }
        res.json(data)
    });
});

router.put('/:id', (req, res, next) => {
    Work.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, data){
        if(err){
            return res.json({error: "500", message: "couldn't update."})
        }
        res.json(data);
    });
        
});

router.delete('/:id', (req, res, next) => {
    Work.findByIdAndDelete(req.params.id, function(err, data){
        if(err){
            return res.json({error: "500", message: "didn't delete."})
        }
        res.json(data);
    });
});

module.exports = router;