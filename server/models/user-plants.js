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
