const announcementmodel = require("./announcement.model");
const { commonResponse } = require("../../helper");
const { fileUploadToS3, deleteImage } = require("../../helper/s3aws")

module.exports = {
    announcementCreate: async (reqbody, id) => {

        try {
            var link = await fileUploadToS3(reqbody.image, "Announcement_Image")
            const newAnnouncement = new announcementmodel({
                title: reqbody.title,
                description: reqbody.description,
                image: link['link'],
                from_date: reqbody.from_date,
                to_date: reqbody.to_date,
                created_by: id,
            });
            return await newAnnouncement.save();
        } catch (error) {
            console.log(" Add new Announcement Error : ", error);
            return { error: error };
        }
    },

    get: async (reqQuery, sort_array, filter_value) => {
        try {

            let LIMIT = reqQuery.limit * 1
            let SKIP = (reqQuery.page - 1) * reqQuery.limit
            if (filter_value != '') {
                var regex = new RegExp(filter_value, 'i')

                filter_value = {
                    $or: [
                        { 'mobile_no': regex },
                        { 'email': regex }
                    ]
                }
            } else {
                filter_value = {};
            }

            let announcement = await announcementmodel.find({
                $and: [
                    filter_value
                ]
            }).limit(LIMIT)
                .skip(SKIP)
                .sort([sort_array])
            return announcement;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    update: async (id, reqBody) => {
        try {
            let findOneBYId = await announcementmodel.findOne({ _id: id })

            if (reqBody.image && findOneBYId != null) {

                var link = await fileUploadToS3(reqBody.image, "Announcement_Image")

                deleteImage(findOneBYId.image.split("/")[findOneBYId.image.split("/").length - 1], "Announcement_Image")
                reqBody.image = link['link']
            }

            let updatedAnnouncement = await announcementmodel.findOneAndUpdate({ _id: id }, { $set: reqBody }, { new: true, }).lean();
            console.log(updatedAnnouncement, "updatedAnnouncement");

            return updatedAnnouncement;
        } catch (error) {
            console.log("Error------ : ", error);
            return { error: error };
        }
    },

    delete: async (id) => {
        try {

            let deleteAnnouncement = await announcementmodel.findByIdAndDelete({ _id: id }).lean();

            deleteImage(deleteUserData.image.split("/")[deleteUserData.image.split("/").length - 1], "Announcement_Image")

            return deleteAnnouncement
        } catch (error) {
            console.log("Error------ : ", error);
            return { error: error };
        }
    },

    getone: async (res, id) => {
        try {
            let Announcement = await announcementmodel.findById({ _id: id });

            return Announcement;
        } catch (error) {

            return new Error(error);
        }
    },

    deletemulti: async (id) => {
        try {

            let Annoucement = await announcementmodel.deleteMany({ '_id': { '$in': id } });
            return Annoucement;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    }

}