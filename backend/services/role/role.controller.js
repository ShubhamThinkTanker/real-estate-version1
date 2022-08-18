const Role = require('./role.model');
var ObjectId = require('mongoose').Types.ObjectId;
const roleservices = require('./role.services')

const { commonResponse } = require("../../helper");
const Validator = require("validator");
const validatecreateInput = require('../../validation/role/createrole')



module.exports = {

    //create roll
    addrole : async(req,res) => {
        try{
           
            let data = req.body
           
            const { errors, isValid } = await validatecreateInput(data);
            if(isValid == false){
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
          
            let role = await roleservices.save(data)
          
            if(role){

                commonResponse.success(res, 200, 'Role has created succesfully ',role);
            }else{
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong');
            }
            
        }catch (error) {
            return next(error);
        }
    
    },

    //get role
    getrole : async(req,res,next) => {
        try {
            let role = await roleservices.get();
            commonResponse.success(res,  200, "Success", role);
        } catch (error) {
            return next(error);
        }
    },

    //update role
    updaterole : async (req,res,next) => {
        try {
        const id = req.params.id;
       
        const idverify = ObjectId.isValid(id);
            if(!idverify){
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
        const rolebody = req.body;
      
        const { errors, isValid } = await validatecreateInput(rolebody);
        if(isValid == false){
          
            return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
        }
        let updatedRoll = await roleservices.update(id, rolebody);
     
        if(!updatedRoll){
            return commonResponse.customErrorResponse(res, 422, 'Roll Not found for this id');
        }
        commonResponse.success(res,  200, "successfully updated", updatedRoll);
        } catch (error) {
        return next(error);
        }
        
    },

    //delete roll
    deleterole : async (req,res,next) => {
        try{
            const id = req.params.id;
          
            const idverify = ObjectId.isValid(id);
            if(!idverify){
                return commonResponse.customErrorResponse(res, 422, 'Enter a valid id');
            }
            let deleteRoll = await roleservices.delete(id)
            if(!deleteRoll){
                return commonResponse.customErrorResponse(res, 422, 'Roll Not found for this id');
            }
    
            commonResponse.success(res,  200, "successfully delete", deleteRoll);
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
            let role = await roleservices.getone(res,id);
            if(!role){
                return commonResponse.customErrorResponse(res, 422, 'Roll Not found for this id');
            }
         
            commonResponse.success(res,  200, "successfully get", role);
        } catch (error) {
           
            return next(error);
        }
    }
}