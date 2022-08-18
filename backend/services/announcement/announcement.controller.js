const announcementModel = require("./announcement.model");
const { commonResponse, commonFunctions, customErrorResponse } = require("../../helper");
const validateAnnouncement = require('../../validation/announcement/createAnnouncement')
const announcementService = require("./announcement.services");
const isEmpty = require("../../validation/isEmpty");
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

    create: async (req, res, next) => {

        try {
            var { errors, isValid } = validateAnnouncement(req.body)
            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
            if (isValid == false) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }

            if (req.files != undefined && req.files.image != undefined) {
                req.body.image = req.files.image;
            }

            let Announcement = await announcementService.announcementCreate(req.body);

            if (Announcement) {
                return commonResponse.success(res, 200, "Successfully Create Announcement", Announcement);
            } else {
                errors.error = "Something went wrong, Please try again Later"
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

        } catch (error) {
            console.log(error, ";error");
        }

    },

    read: async (req, res, next) => {
        try {

            const { page = 1, limit = 10 } = req.query
            let order_column = req.query.order_column || "name";
            let sort_order = req.query.sort_order == "asc" ? "ASC" : "DESC";
            let sort_array = [order_column, sort_order];
            let filter_value = req.query.filter_value || "";

            let announcement = await announcementService.get(req.query, sort_array, filter_value);

            if (announcement.length === 0) {
                return commonResponse.customErrorResponse(res, 422, 'data not found in announcement');
            } else {
                commonResponse.success(res, 200, 'Announcement data succesfully Get ', announcement);
            }
        } catch (error) {
            return next(error);
        }
    },


    update: async (req, res, next) => {
        try {
            const id = req.params.id;

            const idverify = ObjectId.isValid(id);
            if (!idverify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            const announcementbody = req.body;

            const { errors, isValid } = await validateAnnouncement(announcementbody);
            if (isValid == false) {

                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            if (req.files != undefined && req.files.image != undefined) {
                req.body.image = req.files.image;
            }
            let updatedAnnouncement = await announcementService.update(id, announcementbody);

            if (!updatedAnnouncement) {
                return commonResponse.customErrorResponse(res, 422, 'Announcement Not found for this id');
            }
            commonResponse.success(res, 200, "successfully updated", updatedAnnouncement);
        } catch (error) {
            return next(error);
        }

    },

    delete: async (req, res, next) => {
        try {
            const id = req.params.id;

            const idverify = ObjectId.isValid(id);
            if (!idverify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            let deleteAnnouncement = await announcementService.delete(id)

            if (!deleteAnnouncement) {
                return commonResponse.customErrorResponse(res, 422, 'Announcement Not found for this id');
            }
            return commonResponse.success(res, 200, "successfully delete", deleteAnnouncement);
        } catch (error) {
            return next(error);
        }
    },

    getbyid: async (req, res, next) => {
        try {
            let id = req.params.id
            const idverify = ObjectId.isValid(id);
            if (!idverify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            let Announcement = await announcementService.getone(res, id);
            if (!Announcement) {
                return commonResponse.customErrorResponse(res, 422, 'Announcement Not found for this id');
            }

            commonResponse.success(res, 200, "successfully get", Announcement);
        } catch (error) {
            console.log(error, "88989")
            return next(error);
        }
    },

    deleteMulti: async (req, res, next) => {
        try {
            let id = req.body.id

            id.forEach(element => {
                if (element.replace(/\s/g, "") == "") {
                    return commonResponse.customErrorResponse(res, 422, 'Empty String Does Note Accepted');
                }
            });

            let Announcement = await announcementService.deletemulti(id);
            if (Announcement.deletedCount == 0) {
                return commonResponse.customErrorResponse(res, 422, 'Announcement Not deleted of this id');
            }

            commonResponse.success(res, 200, "successfully deleted multiple", Announcement);

        } catch (error) {
            return next(error);
        }
    }

}