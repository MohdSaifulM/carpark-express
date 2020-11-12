const mongoose = require("mongoose");
const { Schema } = mongoose;

const carparkSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    maxCapacity: { type: Number, required: true },
    currentVehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vehicle"
    }],
});


const Carpark = mongoose.model("Carpark", carparkSchema);

module.exports = Carpark;
