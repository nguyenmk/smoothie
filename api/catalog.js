// catalogue des smoothie

var express = require('express');
var router = express.Router();

/* GET catalogue listing. */
router.get('/list', function(req, res, next) {
    const smoothie = {
        title: 'Smoothie a la fraise',
        ingredients: [
            {nom: 'Fraises', quantity: '75g'},
            {nom: 'Water', quantity: '25cl'},
            {nom: 'Sugar', quantity: '20g'},
        ],
        features: {
            cost: '1 euro',
            prepareTime: '5 minutes',
        },
        advice: 'Utilisez des fraises mures. Ajoutez 2 ou 3 feuilles de menthes pour le cote frais',
        description: 'Super smoothie rafraichissant, prets en quelque minutes',
        steps: [
            { stepText: 'Lavez les fraises a l\'eau claire.' },
            { stepText: 'Eliminez le pedoncule avec un couteau pointu.' },
            { stepText: 'Placez tous les ingredients ands un bol de mixer' },
            { stepText: 'Mixez 1 minute' },
            { stepText: 'Servez dans un grand verre' },
            { stepText: 'Ajoutez 2/3 feuilles de menthes si envie' },
        ],
    };

    res.send(smoothie);
});

module.exports = router;
