const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")

const chairmanSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        mobile_no: {
            type: String,
            required: true,
            default: ""
        },
        gender: {
            type: String,
            require: true
        },
        profile_image: {
            type: String,
            required: false,
            default: ""
        },
        role: {
            type: String,
            enum: ["admin", "chairman", "user"],
            default: "user",
            required: false,
        },
        resetPasswordToken: {
            type: String
        },
        resetPasswordExpires: {
            type: Date
        },
        createdAt: {
            field: 'created_at',
            type: Date,
            default: Date.now
        },
        created_by: {
            type: String
        },
        updatedAt: {
            field: 'updated_at',
            type: Date,
            default: ""
        },
        updated_by: {
            type: Number,
            default: ""
        },
    },

    {
        versionKey: false
    }
)


chairmanSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id, name: this.name, email: this.email, mobile_no: this.mobile_no }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

const User = mongoose.model('user', chairmanSchema)

module.exports = User