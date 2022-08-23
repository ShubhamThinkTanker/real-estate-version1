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

    getAllVehicle: async () => {
        try {
            let getAllVehicles = await Vehicle.find()
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


}

