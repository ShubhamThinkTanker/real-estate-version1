const mongoose = require('mongoose')

const estateStructureSchema = mongoose.Schema(
    {
        real_estates_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Realestate'
        },
        // type: {
        //     type: String,
        // },
        estate: {
            type: Object,
            require: true
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




const EstateStructure = mongoose.model('EstateStructure', estateStructureSchema)

module.exports = EstateStructure