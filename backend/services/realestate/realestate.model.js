const mongoose = require('mongoose')

const realestateSchema = mongoose.Schema(
    {
        realestate_name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required:true,  
        },
        city:{
            type: String,
            required:true,  
        },
        state:{
            type: String,
            required:true,
        },
        country:{
            type: String,
            required:true,
        },
        map_link:{
            type: String,
            required:true,
        },
        created_at:{
            type:Date,
            default: Date.now 
        },
        updated_at:{
            type:Date, 
            default: Date.now 
        }
    },
    {
        versionKey: false
    }
)

const Realestate = mongoose.model('Realestate', realestateSchema)

module.exports = Realestate