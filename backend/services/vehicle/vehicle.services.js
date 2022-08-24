const Vehicle = require('./vehicle.model')
const { commonResponse } = require("../../helper");


module.exports = {

    //------ create vehicle ----- //

    save: async (reqbody, id) => {
        try {
            const newVehicle = new Vehicle({
                vehicle_type: reqbody.vehicle_type,
                vehicle_no: reqbody.vehicle_no,
                created_By: id,
                user_id: reqbody.user_id,
                sticker_status: reqbody.sticker_status == 'true' ? true : false
            });
            return await newVehicle.save();
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //------ get vehicle ----- //

    get: async (id) => {
        try {
            let getVehicleBYId = await Vehicle.findOne({ _id: id }).lean();

            if (!getVehicleBYId) {
                return new Error(commonResponse.getErrorMessage("VEHICLE_NOT_FOUND"));
            }
            return getVehicleBYId;
        } catch (error) {
            console.log("Error : ", error);
            return { error: error };
        }
    },

    //------ get All vehicle ----- //

    getAllVehicle: async (reqQuery, sort_array, filter_value, stickerStatus) => {
        try {
            console.log(filter_value, ":filter_value");
            let LIMIT = reqQuery.limit * 1
            let SKIP = (reqQuery.page - 1) * reqQuery.limit
            if (filter_value != '') {
                var regex = new RegExp(filter_value, 'i')

                filter_value = {
                    $or: [
                        { 'vehicle_no': regex },

                    ]
                }
            } else {
                filter_value = {};
            }
            if (stickerStatus != "") {

                stickerStatus = {
                    $or: [{

                        sticker_status:
                            stickerStatus
                    }]
                }
            } else {
                stickerStatus = {};
            }
            let getAllVehicles = await Vehicle.find({
                $and: [
                    filter_value,
                    stickerStatus
                ]
            }).limit(LIMIT)
                .skip(SKIP)
                .sort([sort_array])
            return getAllVehicles;
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },


    //------ update vehicle ----- //

    update: async (id, reqBody) => {
        try {
            let updateVehicleData = await Vehicle.findOneAndUpdate({ _id: id }, { $set: reqBody }, { new: true, }).lean();
            return updateVehicleData;

        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },

    //------ delete vehicle ----- //

    delete: async (id) => {
        try {
            let deleteVehicle = await Vehicle.findByIdAndDelete(id);

            return deleteVehicle
        } catch (error) {
            console.log("Error : ", error);
            return new Error(error);
        }
    },


    deleteMultiple: async (id) => {
        try {
            let deleteMultipleVehicle = await Vehicle.deleteMany({ _id: { $in: id } });
            console.log(deleteMultipleVehicle, "deleteMultipleVehicle");
            return deleteMultipleVehicle;
        } catch (error) {
            console.log('Error : ', error);
            return new Error(error);
        }
    },

    emailexits: async (reqBody) => {
        try {
            let vehicleNumber = await Vehicle.findOne({
                vehicle_no: reqBody.vehicle_no
            }).lean();

            if (!vehicleNumber) {
                return false;
            }
            return vehicleNumber;
        } catch (error) {
            console.log(error);
        }
    }


}

