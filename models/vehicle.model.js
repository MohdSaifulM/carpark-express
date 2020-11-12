const mongoose = require("mongoose");
const { Schema } = mongoose;

const vehicleSchema = new Schema({
    vehicleType: { 
        type: String, 
        required: true,
        enum: ['2W', '4w'],
        default: '2w' ,
    },
    licensePlateNo: { type: String, required: true },
    makeModel: { type: Number, required: true },
    Color: { type: String, required: true },
});


const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
