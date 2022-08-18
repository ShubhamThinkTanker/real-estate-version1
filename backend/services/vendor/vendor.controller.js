const Vendor = require('./vendor.model');
var ObjectId = require('mongoose').Types.ObjectId;
const vendorServices = require('./vendor.services')
const isEmpty = require("../../validation/isEmpty");
const { commonResponse } = require("../../helper");
const Validator = require("validator");
const validatecreateInput = require('../../validation/vendorValidation/vendor.validation')

module.exports = {

    // --- create Vendor ----//
    createVendor: async (req, res, next) => {

        try {
            console.log(req.body);
            
            var { errors, isValid } = await validatecreateInput(req.body)
            
            if (isValid === false) {
                console.log(isValid,"00000")

                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            let vendor = await vendorServices.save(req.body)

            if (vendor) {
                return commonResponse.success(res, 200, 'vendor has created succesfully ', vendor);
            } else {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }

        } catch (error) {
            console.log(" Not create  --> ", error);
            return next(error);
        }
    },

    //get All vendor
    getVendor : async(req,res,next) => {
        try {
            const { page = 1, limit = 10 } = req.query
            let order_column = req.query.order_column || "name";
            let sort_order = req.query.sort_order == "asc" ? "ASC" : "DESC";
            let sort_array = [order_column, sort_order];
            let filter_value = req.query.filter_value || "";


            let findAllVendor = await vendorServices.get(req.query, sort_array, filter_value);
            if (findAllVendor) {
                return commonResponse.success(res, 200, 'Successfully get All Chairman', findAllVendor);
            } else {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
        } catch (error) {
            return next(error);
        }
    },

    //update vendor
    updateVendor : async (req,res,next) => {
        try {
        const id = req.params.id;
        console.log(id,"id")
        const idverify = ObjectId.isValid(id);
            if(!idverify){
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
        const vendorbody = req.body;
        console.log(vendorbody,"vendorbody")
        const { errors, isValid } = await validatecreateInput(vendorbody);
        if(isValid == false){
            console.log("11111")
            return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
        }
        let updateVendorData = await vendorServices.update(id, vendorbody);
        console.log(updateVendorData,"updateVendorData")
        if(!updateVendorData){
            return commonResponse.customErrorResponse(res, 422, 'Vendor Not found for this id');
        }
        commonResponse.success(res,  200, "successfully updated", updateVendorData);
        } catch (error) {
        return next(error);
        }
        
    },

    //delete vendor
    deleteVendor : async (req,res,next) => {
        try{
            const id = req.params.id;
            console.log(id,"id")
            const idverify = ObjectId.isValid(id);
            if(!idverify){
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            let deleteVendor = await vendorServices.delete(id)
            if(!deleteVendor){
                return commonResponse.customErrorResponse(res, 422, 'Vendor Not found for this id');
            }
    
            commonResponse.success(res,  200, "successfully delete", deleteVendor);
        } catch (error){
            return next(error);
        }
    },

    //getbyid
    getbyid: async (req,res,next) => {
        try {
            let id = req.params.id
            const idverify = ObjectId.isValid(id);
            if(!idverify){
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            let vendor = await vendorServices.getone(res,id);
            if(!vendor){
                return commonResponse.customErrorResponse(res, 422, 'vendor Not found for this id');
            }
            console.log(vendor,"vendor")
            commonResponse.success(res,  200, "successfully get", vendor);
        } catch (error) {
            console.log(error,"88989")
            return next(error);
        }
    },

    //Delete Multiple
    deleteMulti: async(req,res,next) => {
        try{
            let body = req.body.id;
            console.log(body,"vendors ")
        
            if(body && body.length == 0){
                return commonResponse.customErrorResponse(res, 422, 'Enter a id in array');
            }
      
            
            let vendor = await vendorServices.deletemulti(body);
        
            if(vendor.deletedCount == 0){
                return commonResponse.customErrorResponse(res, 422, 'vendor Not deleted for this id');
            }
          
            commonResponse.success(res,  200, "successfully deleted multiple", vendor);

        } catch (error){
            return next(error);
        }
    }
}