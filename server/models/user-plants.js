const { Schema, model } = mongoose;

const plantSchema = new Schema({
    commonName: {
        type: String,
        required: true,
    },
    scientificName: {
        type: String,
        required: true,
    },
    nickname: String,
    watering: {
        type: String,
        required: true,
    },
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
