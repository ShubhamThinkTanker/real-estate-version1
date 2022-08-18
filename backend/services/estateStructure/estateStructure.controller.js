const EstateStructure = require('./estateStructure.model');
const EstateStructureServices = require('./estateStructure.services')
const { commonResponse } = require("../../helper");
const validateEstateStructure = require('../../validation/estateStructure/estateStructure.validation')
const isEmpty = require("../../validation/isEmpty");
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {


    // --- create Estate Structure ----//

    addEstateStructure: async (req, res, next) => {

        try {

            var { errors, isValid } = validateEstateStructure(req.body)
            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
            if (isValid == false) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }

            let estateStructure = await EstateStructureServices.save(req.body)
            
            if (estateStructure) {
                return commonResponse.success(res, 200, 'EstateStructure has created succesfully ', estateStructure);
            } else {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }

        } catch (error) {
            console.log(" Not create addEstateStructure --> ", error);
            return next(error);
        }
    },

    //--- list all Estate Structure ---//

    estateStructureList: async (req, res, next) => {

        try {
            let findAllEstateStructure = await EstateStructureServices.getAll();
            if (findAllEstateStructure) {
                return commonResponse.success(res, 200, 'Successfully get All EstateStructure', findAllEstateStructure);
            } else {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }
        }
        catch (error) {
            console.log(" Not find  estateStructureList --> ", error);
            return next(error);
        }

    },

    // --- find by Id EstateStructure --- //

    singleEstateStructureList: async (req, res, next) => {

        try {
            var id = req.params.id
            const idVerify = ObjectId.isValid(id);
            if (!idVerify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            let findEstateStructureById = await EstateStructureServices.get(id);



            if (!findEstateStructureById) {
                return commonResponse.customErrorResponse(res, 422, ' Estate Structure is not found in this id');
            } else {
                return commonResponse.success(res, 200, 'Successfully Get Estate Structure By Id', findEstateStructureById);
            }
        } catch (error) {
            console.log(" Not find singleEstateStructureList --> ", error);
            return next(error);
        }

    },

    // -- update EstateStructure --//

    updateEstateStructure: async (req, res, next) => {

        try {
            var id = req.params.id
            const idVerify = ObjectId.isValid(id);
            if (!idVerify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }

            var { errors, isValid } = validateEstateStructure(req.body)
            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
            if (isValid == false) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }

            let updatedEstateStructure = await EstateStructureServices.update(id, req.body);

            if (!updatedEstateStructure) {
                return commonResponse.customErrorResponse(res, 422, 'Etate Structure is Not found ');
            } else {
                return commonResponse.success(res, 200, "successfully updated", updatedEstateStructure);
            }
        }
        catch (error) {
            console.log(" Not update updateEstateStructure --> ", error);
            return next(error);
        }
    },

    // -- delete EstateStructure --//

    deleteEstateStructure: async (req, res, next) => {

        var id = req.params.id
        const idVerify = ObjectId.isValid(id);
        if (!idVerify) {
            return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
        }
        try {

            let deletedEstateStructure = await EstateStructureServices.delete(id);
            if (deletedEstateStructure) {
                return commonResponse.success(res, 200, 'Successfully delete Estate Structure By Id', deletedEstateStructure);
            } else {
                return commonResponse.customErrorResponse(res, 400, 'Something went wrong');
            }

        } catch (error) {
            console.log(" Not delete deleteEstateStructure --> ", error);
            return next(error);
        }

    }

}

