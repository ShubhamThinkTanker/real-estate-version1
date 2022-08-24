const Vehicle = require('./vehicle.model');
const VehicleServices = require('./vehicle.services')
const { commonResponse } = require("../../helper");
const validateVehicle = require('../../validation/vehicle/vehicle.validation')
const isEmpty = require("../../validation/isEmpty");
const User = require("../user/user.model");
const vehicleServices = require('./vehicle.services');
const ObjectId = require('mongodb').ObjectId;

module.exports = {

    // --- create vehicle----//

    addVehicle: async (req, res, next) => {
        try {
            if (!req.user) {
                return res.json({ "error": true, "statusCode": 401, "message": "Invalid  login", "errors": "Invalid Login credential" });
            }
            let id = req.user._id

            var { errors, isValid } = validateVehicle(req.body)

            var user = await User.findOne({ mobile_no: req.body.mobile_no })

            let is_exist = await vehicleServices.emailexits(req.body);
            console.log("is_exist", is_exist);
            if (is_exist) {
                errors.error = "vehicle no is already exist"
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
            if (isValid == false) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }
            let vehicle = await VehicleServices.save(req.body, id)
            if (vehicle) {
                return commonResponse.success(res, 201, 'vehicle created succesfully ', vehicle);
            } else {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }
        } catch (error) {
            console.log(" Not created vehicle --> ", error);
            return next(error);
        }
    },

    // --- get Vehicle -- //

    get: async (req, res, next) => {
        try {
            let id = req.params.id
            let findVehicleById = await VehicleServices.get(id);
            if (findVehicleById) {
                commonResponse.success(res, 200, 'Successfully Get Vehicle By Id', findVehicleById);
            }
            else {
                errors.error = "VEHICLE_NOT_FOUND"
                return commonResponse.customErrorResponse(res, 400, 'Something went wrong', errors);
            }
        } catch (error) {
            return next(error);
        }
    },

    // --- get All Vehicle -- //

    findAllvehicle: async (req, res, next) => {
        try {
            const { page = 1, limit = 10 } = req.query
            let order_column = req.query.order_column || "name";
            let sort_order = req.query.sort_order == "asc" ? "ASC" : "DESC";
            let sort_array = [order_column, sort_order];

            let filter_value = req.query.filter_value || "";
            let stickerStatus = req.query.stickerStatus || "";
            let Total_count = await Vehicle.countDocuments()

            let findAllVehicles = await VehicleServices.getAllVehicle(req.query, sort_array, filter_value, stickerStatus);
            if (findAllVehicles) {
                return commonResponse.success(res, 200, 'Successfully get All Vehicle', { TotalCount: Total_count, Vehicle_Details: findAllVehicles });
            } else {

                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }
        }
        catch (error) {
            console.log(" Not find  Vehicle --> ", error);
            return next(error);
        }

    },


    // -- update Vehicle --//

    updatevehicle: async (req, res, next) => {
        try {
            if (!req.user) {
                return res.json({ "error": true, "statusCode": 401, "message": "Invalid  login", "errors": "Invalid Login credential" });
            }
            const id = req.params.id;
            const idVerify = ObjectId.isValid(id);
            if (!idVerify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            var { errors, isValid } = validateVehicle(req.body)

            var user = await User.findOne({ mobile_no: req.body.mobile_no })

            if (user == null || user.mobile_no != req.body.mobile_no) {
                errors.error = "Mobile no is inValid"
            }
            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
            if (isValid == false) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }
            let updatedVehicle = await VehicleServices.update(id, req.body);

            if (!updatedVehicle) {
                return commonResponse.customErrorResponse(res, 422, 'Vehicle is Not found ');
            } else {
                return commonResponse.success(res, 200, "successfully updated", updatedVehicle);
            }
        }
        catch (error) {
            console.log(" Not update vehicle --> ", error);
            return next(error);
        }
    },


    // -- delete vehicle   -- //
    deletevehicle: async (req, res, next) => {
        try {
            const id = req.params.id;
            const idverify = ObjectId.isValid(id);
            if (!idverify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            let deleteVehicle = await vehicleServices.delete(id)

            if (deleteVehicle) {
                return commonResponse.success(res, 200, "successfully delete vehicle", deleteVehicle);
            }
            return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
        } catch (error) {
            console.log(" Not delete vehicle --> ", error);
            return next(error);
        }
    },

    // -- delete multiple vehicle   -- //

    deleteMultiplevehicle: async (req, res, next) => {
        try {
            let id = req.body.id
            let deleteMultipleVehicle = await vehicleServices.deleteMultiple(id);

            if (deleteMultipleVehicle.deletedCount == 0) {
                return commonResponse.customErrorResponse(res, 422, 'Vehicle not deleted  ');
            } else {
                return commonResponse.success(res, 200, "successfully multipal deleted vehicle ", deleteMultipleVehicle);
            }
        } catch (error) {
            console.log(" Not delete multiple vehicle --> ", error);
            return next(error);
        }
    }
}






