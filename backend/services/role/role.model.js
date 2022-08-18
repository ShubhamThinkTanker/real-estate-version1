const mongoose = require('mongoose')

const rolesSchema = mongoose.Schema(
    {
        role_name: {
            type: String,
            required: true,
            unique: true,
        },
        role_id: {
            type: String,
            required:true,
            unique: true,
        }
    },
   
    {
        versionKey: false
    }
)




const Role = mongoose.model('Role', rolesSchema)

module.exports = Role