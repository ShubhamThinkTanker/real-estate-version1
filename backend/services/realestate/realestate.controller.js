const Realestate = require('./realestate.model');
var ObjectId = require('mongoose').Types.ObjectId;
const realestateservices = require('./realestate.services')

const { commonResponse } = require("../../helper");

const validatecreateInput = require('../../validation/realestate/realesate.validation')

module.exports = {

    //Create realestate
    addrealestate: async (req, res, next) => {
        try {

            let data = req.body

            const { errors, isValid } = await validatecreateInput(data);
            if (isValid == false) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            let realestate = await realestateservices.save(data)

            if (realestate) {
                commonResponse.success(res, 200, 'Realestate has created succesfully ', realestate);
            } else {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }

        } catch (error) {
            return next(error);
        }

    },

    //get all realestate
    getrealestate: async (req, res, next) => {
        try {
            let realestate = await realestateservices.get();

            if (realestate.length === 0) {
                return commonResponse.customErrorResponse(res, 422, 'data not found in realestate');
            } else {
                commonResponse.success(res, 200, 'Realestate data succesfully ', realestate);
            }
        } catch (error) {
            return next(error);
        }
    },

    //update realestate
    updaterealestate: async (req, res, next) => {
        try {
            const id = req.params.id;

            const idverify = ObjectId.isValid(id);
            if (!idverify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }

            const realestatebody = req.body;

            const { errors, isValid } = await validatecreateInput(realestatebody);

            if (isValid == false) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            let updatedRealestate = await realestateservices.update(id, realestatebody);

            if (!updatedRealestate) {
                return commonResponse.customErrorResponse(res, 422, 'Realestate Not found for this id');
            }
            commonResponse.success(res, 200, "successfully updated", updatedRealestate);
        } catch (error) {
            return next(error);
        }

    },

    //getbyid
    getbyid: async (req, res, next) => {
        try {
            let id = req.params.id
            const idverify = ObjectId.isValid(id);
            if (!idverify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            let realesate = await realestateservices.getone(res, id);
            if (!realesate) {
                return commonResponse.customErrorResponse(res, 422, 'Realestate Not found for this id');
            }

            commonResponse.success(res, 200, "successfully get", realesate);
        } catch (error) {
            console.log(error, "realestate error")
            return next(error);
        }
    },

    // delete realestate
    deleterealestate: async (req, res, next) => {
        try {
            const id = req.params.id;

            const idverify = ObjectId.isValid(id);
            if (!idverify) {
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            let deleteRealestate = await realestateservices.delete(id)
            if (!deleteRealestate) {
                return commonResponse.customErrorResponse(res, 422, 'Realestate Not found for this id');
            }

            commonResponse.success(res, 200, "successfully delete", deleteRealestate);
        } catch (error) {
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

            let Realestate = await realestateservices.deletemulti(id);
            if (Realestate.deletedCount == 0) {
                return commonResponse.customErrorResponse(res, 422, 'Realestate Not deleted of this id');
            }

            commonResponse.success(res, 200, "successfully deleted multiple", Realestate);

        } catch (error) {
            return next(error);
        }
    }

}
