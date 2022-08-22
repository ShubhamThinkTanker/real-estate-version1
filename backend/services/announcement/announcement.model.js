let mongoose = require('mongoose');

let announcementSchema = mongoose.Schema({

    title: {
        type: String
    },
    society: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SocietyMaster'
    },
    chairman: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String
    },
    notify_by: { //0=no 1=yes
        type: String
    },
    image: {
        type: String
    },
    start_date: {
        type: String
    },
    end_date: {
        type: String
    },
    location: {
        type: String
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

const Announcement = mongoose.model('Announcement', announcementSchema)
module.exports = Announcement