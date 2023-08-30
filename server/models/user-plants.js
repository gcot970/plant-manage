<<<<<<< HEAD
const { Schema, model } = require("mongoose");
=======
const { Schema, model } = require('mongoose');
>>>>>>> a04cc1e367005a224ff4a3c4ee0ceb9f8737db7e

const plantSchema = new Schema({
    commonName: String,
    scientificName: String,
    nickname: String,
    img_url: String,
    watering: String,
    addedDate: {
        type: Date,
        default: Date.now,
    },
    firstWaterDate: {
        type: Date,
        default: Date.now,
    },
    lastWaterDate: Date,
});

const Plant = model('Plant', plantSchema);

module.exports = Plant;
