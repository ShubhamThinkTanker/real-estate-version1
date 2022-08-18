const maintenanceStructure = require('./maintenance.model')
const { commonResponse } = require("../../helper");

module.exports = {
    save: async (reqbody, sum) => {
        try {
            const maintenanceStructures = new maintenanceStructure({
                user_id: reqbody.user_id,
                month: reqbody.month,
                maintenance: reqbody.maintenance,
                remaining_amount: sum
            });
            return await maintenanceStructures.save();
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    getAll: async (reqQuery, sort_array, filter_value) => {
        try {
            // console.log(filter_value, ':sortJson');
            let LIMIT = reqQuery.limit * 1;
            let SKIP = (reqQuery.page - 1) * reqQuery.limit;
            if (filter_value != '') {
                var regex = new RegExp(filter_value, 'i');
                console.log(regex, ':regex');
                filter_value = {
                    $or: [{ month: regex }],
                };
            } else {
                filter_value = {};
            }

            let getAllMaintenanceStructure = await maintenanceStructure.find(filter_value)
                .limit(LIMIT)
                .skip(SKIP)
                .sort([sort_array]);
            return getAllMaintenanceStructure;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    update: async (id, reqBody, sum) => {
        try {

            let updatedMaintenanceStructure = await maintenanceStructure.findOneAndUpdate({ _id: id }, {
                user_id: reqBody.user_id,
                month: reqBody.month,
                maintenance: reqBody.maintenance,
                remaining_amount: sum
            }).lean();

            if (!updatedMaintenanceStructure || updatedMaintenanceStructure != null) {
                return updatedMaintenanceStructure;
            }
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    delete: async (id) => {

        try {
            let updatedMaintenanceStructure = await maintenanceStructure.findOneAndDelete({ _id: id }).lean();
            console.log(updatedMaintenanceStructure, ":updatedMaintenanceStructure");
            if (!updatedMaintenanceStructure || updatedMaintenanceStructure != null) {
                return updatedMaintenanceStructure;
            }

        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }

    },

    deletemulti: async (id) => {
        try {
            let GetData = await maintenanceStructure.deleteMany({ _id: { $in: id } });
            return GetData;
        } catch (error) {
            console.log('Error : ', error);
            return new Error(error);
        }
    },

    get: async (id) => {
        try {
            let getmaintenanceStructureBYId = await maintenanceStructure.findById({ _id: id }).lean();

            if (getmaintenanceStructureBYId || getmaintenanceStructureBYId != null) {
                return getmaintenanceStructureBYId;
            }
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

}