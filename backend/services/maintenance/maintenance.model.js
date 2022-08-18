const mongoose = require('mongoose')

const maintenanceSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Realestate'
        },
        month: {
            type: String,
        },
        maintenance: [{
            shop_no: {
                type: String
            },
            amount: {
                type: Number
            },
            status: {
                type: String,
                enum: ["pending", "completed"],
                default: "pending",
            }
        }],
        remaining_amount: {
            type: String,
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        created_by: {
            type: String,
        },
        updated_at: {
            type: Date,
            default: Date.now
        },
        updated_by: {
            type: String,
        }
    },
    {
        versionKey: false
    }
)




const maintenanceStructure = mongoose.model('maintenance', maintenanceSchema)

module.exports = maintenanceStructure