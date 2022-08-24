const dashboardServices = require('./dashboard.services')
const { commonResponse } = require("../../helper");
// const validatedashboard = require('../../validation/estateStructure/estateStructure.validation')
const isEmpty = require("../../validation/isEmpty");
const ObjectId = require('mongodb').ObjectId;
const Realestate = require('../realestate/realestate.model')
const chairmananduser = require('../user/user.model')


module.exports = {

    getChairman: async (req, res, next) => {
        try {



            let Total_count = await chairmananduser.countDocuments({ role: "chairman" })
            let Total_active = await chairmananduser.countDocuments({ $and: [{ role: "chairman" }, { status: 'active' }] })
            let Total_inactive = await chairmananduser.countDocuments({ $and: [{ role: "chairman" }, { status: 'inactive' }] })
            let latestData = await chairmananduser.find({ role: 'chairman' }).sort([['createdAt', -1]]).limit(5);

            return commonResponse.success(res, 200, "Successfully Create Announcement", { TotalCount: Total_count, TotalActive: Total_active, TotalInActive: Total_inactive, latestData });

        } catch (error) {
            console.log(error);
        }
    },

    getUser: async (req, res, next) => {
        try {

            let Total_count = await chairmananduser.countDocuments({ role: "user" })
            let Total_active = await chairmananduser.countDocuments({ $and: [{ role: "user" }, { status: 'active' }] })
            let Total_inactive = await chairmananduser.countDocuments({ $and: [{ role: "user" }, { status: 'inactive' }] })
            let latestData = await chairmananduser.find({ role: 'user' }).sort([['createdAt', -1]]).limit(5);

            return commonResponse.success(res, 200, "Successfully Create Announcement", { TotalCount: Total_count, TotalActive: Total_active, TotalInActive: Total_inactive, latestData });

        } catch (error) {
            console.log(error);
        }
    }


}
