const mongoose = require('mongoose')

const vendorSchema = mongoose.Schema(
    {
        name:{
            type:String
        },
        lastname:{
            type:String
        },
        mobile_no:{
            type:String
        },
        profession:{
            type:String
        },
        services:{
            type:String
        },
        address:{
            type:String
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
)




const Vendor = mongoose.model('Vendor', vendorSchema)

module.exports = Vendor