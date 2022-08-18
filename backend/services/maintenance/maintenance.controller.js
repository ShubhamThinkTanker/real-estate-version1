const maintenanceStructure = require('./maintenance.model');
const maintenanceStructureServices = require('./maintenance.services')
const { commonResponse } = require("../../helper");
const isEmpty = require("../../validation/isEmpty");
const validateMaintenance = require('../../validation/maintenance/maintenance.validation')
var ObjectId = require('mongoose').Types.ObjectId;


module.exports = {

    createMaintenance: async (req, res, next) => {
        try {
            var { errors, isValid } = validateMaintenance(req.body)

            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
            if (isValid == false) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            var maintenance = req.body.maintenance
            let returnArray = []
            if (maintenance != null) {
                maintenance.forEach(element => {
                    if (element.shop_no.replace(/\s/g, "") == "") {
                        errors.error = "Please enter the shop No"
                        return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
                    }
                    if (element.amount.replace(/\s/g, "") == "") {
                        errors.error = "Please enter the amount "
                        return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
                    }

                    if (element.status.search('pending') !== -1) returnArray.push(parseInt(element.amount))
                    return returnArray
                });

                const sum = returnArray.reduce((accumulator, value) => {
                    return accumulator + value;
                }, 0);

                let maintenanceStructure = await maintenanceStructureServices.save(req.body, sum)
                if (maintenanceStructure) {
                    return commonResponse.success(res, 200, 'Maintenance has created succesfully ', maintenanceStructure);
                } else {

                    return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
                }

            } else {
                errors.error = "Maintenance is required"
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }






        } catch (error) {
            console.log("Console Error ==> ", error);
        }
    },

    maintenanceStructureList: async (req, res, next) => {
        try {

            const { page = 1, limit = 10 } = req.query
            let order_column = req.query.order_column || "name";
            let sort_order = req.query.sort_order == "asc" ? "ASC" : "DESC";
            let sort_array = [order_column, sort_order];
            let filter_value = req.query.filter_value || "";

            let findAllMaintenanceStructure = await maintenanceStructureServices.getAll(req.query, sort_array, filter_value);
            if (findAllMaintenanceStructure) {
                return commonResponse.success(res, 200, 'Successfully get All EstateStructure', findAllMaintenanceStructure);
            } else {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }
        }
        catch (error) {
            console.log(" Not find  estateStructureList --> ", error);
            return next(error);
        }
    },

    updateMaintenance: async (req, res, next) => {
        try {
            var id = req.params.id
            const idVerify = ObjectId.isValid(id);
            if (!idVerify) {
                // errors.error = 
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', 'Enter a valid id');
            }

            var { errors, isValid } = validateMaintenance(req.body)
            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
            if (isValid == false) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            var maintenance = req.body.maintenance
            let returnArray = []
            if (maintenance != null) {
                maintenance.forEach(element => {
                    if (element.shop_no.replace(/\s/g, "") == "") {
                        errors.error = "Please enter the shop No"
                        return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
                    }
                    if (element.amount.replace(/\s/g, "") == "") {
                        errors.error = "Please enter the amount "
                        return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
                    }

                    if (element.status.search('pending') !== -1) returnArray.push(parseInt(element.amount))
                    return returnArray
                });

                const sum = returnArray.reduce((accumulator, value) => {
                    return accumulator + value;
                }, 0);

                let updatedMaintenanceStructure = await maintenanceStructureServices.update(id, req.body, sum);

                if (!updatedMaintenanceStructure) {
                    return commonResponse.customErrorResponse(res, 422, 'Maintenance  is Not found ');
                } else {
                    return commonResponse.success(res, 200, "successfully updated", updatedMaintenanceStructure);
                }

            } else {
                errors.error = "Maintenance is required"
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }





        } catch (error) {
            console.log(" Not update updateEstateStructure --> ", error);
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
            let Maintenance = await maintenanceStructureServices.get(id);
            if (!Maintenance) {
                return commonResponse.customErrorResponse(res, 422, 'Maintenance Not found for this id');
            }

            commonResponse.success(res, 200, "successfully get", Maintenance);
        } catch (error) {
            console.log(error, "88989")
            return next(error);
        }
    },

    deleteMaintenance: async (req, res, next) => {
        try {

            var id = req.params.id
            log
            const idVerify = ObjectId.isValid(id);
            if (!idVerify) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', 'Enter a valid id');
            }

            let deletedMaintenanceStructure = await maintenanceStructureServices.delete(id);
            if (deletedMaintenanceStructure) {
                return commonResponse.success(res, 200, 'Successfully delete Maintenance  By Id', deletedMaintenanceStructure);
            } else {
                return commonResponse.customErrorResponse(res, 400, 'Something went wrong');
            }

        } catch (error) {
            console.log(error, ":error");
        }
    },

    deleteMultipleMaintenance: async (req, res, next) => {
        try {
            let id = req.body.id
            let getData = await maintenanceStructureServices.deletemulti(id);

            if (getData.deletedCount == 0) {
                return commonResponse.customErrorResponse(res, 422, 'Can not find data of this id ');
            } else {
                return commonResponse.success(res, 200, "successfully deleted multiple", getData);
            }

        } catch (error) {
            return next(error);
        }
    }


}
