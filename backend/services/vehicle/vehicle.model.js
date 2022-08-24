let mongoose = require('mongoose');

let vehicleSchema = mongoose.Schema({
    created_By: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    vehicle_type: {
        type: String,
        required: true,
    },
    vehicle_no: {
        type: String,
        required: true,

    },
    sticker_status: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false
});


const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle

