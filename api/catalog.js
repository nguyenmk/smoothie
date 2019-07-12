// catalogue des smoothie

var express = require('express');
var router = express.Router();
const Smoothie = require('../models/smoothie');
/* GET catalogue listing. */
router.get('/list', async function(req, res, next) {
    /*
    var smoothie = Smoothie.find({}, function(err, models) {
    //var smoothie = Smoothie.find({"title": /fraise/i}, 'title id', function(err, models) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            //res.json(models);
            console.log(models);
            res.send(models);
        }
    });
    */
    
    try {
        const smoothies = await Smoothie.find({});
        res.send(smoothies);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
    
});

router.get('/recipe/fruit/:fruit', async (req, res, next) => {
    try {
        let fruit = req.params.fruit;
        const smoothies = await Smoothie.find({"title": new RegExp(fruit, 'i')});
        //console.log('These are the recipes matched your request: ', smoothies);
        res.send(smoothies);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }    
})

router.get('/recipe/:id', async (req, res, next) => {
    try {
        const smoothies = await Smoothie.findById(req.params.id);
        //console.log('These are the recipes matched your request: ', smoothies);
        res.send(smoothies);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

router.post('/recipe/add/', async function(req, res, next){
    try {
        console.log(req.body);      // your JSON
        const smoothie = await Smoothie.create(req.body);    
        response.send(smoothie);    // echo the result back
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

module.exports = router;
