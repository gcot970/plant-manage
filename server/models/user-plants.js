const { Schema, model } = require('mongoose');

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
