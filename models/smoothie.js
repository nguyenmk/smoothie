const mongoose = require('mongoose');

const smoothieSchema = mongoose.Schema({
    title: { type: String, required: false },
    ingredients: [
        {nom: String, quantity: String},
        {nom: String, quantity: String},
        {nom: String, quantity: String}
    ],
    features: {
        cost: String ,
        prepareTime: String
    },
    advice: String ,
    description: String ,
    steps: [
        { stepText: String } ,
        { stepText: String } ,
        { stepText: String } ,
        { stepText: String } ,
        { stepText: String } ,
        { stepText: String }
    ]

    /*
    name: {
        type: String,
        required: false
    },

    photo: [
        {
            title: String,
            path: String,
            description: String
        }
    ]
    */
});

const Smoothie = module.exports = mongoose.model('smoothie', smoothieSchema);