const Validator = require("validator");
const isEmpty = require("../isEmpty");
const  Mongoose  = require("mongoose");

module.exports = async function validatecreateInput(data) {
    let errors = {};
    console.log(data,"datavali")
    data.realestate_name = !isEmpty(data.realestate_name) ? data.realestate_name : "";
    data.address = !isEmpty(data.address) ? data.address : "";
    data.city = !isEmpty(data.city) ? data.city : "";
    data.state = !isEmpty(data.state) ? data.state : "";
    data.country = !isEmpty(data.country) ? data.country : "";
    data.map_link = !isEmpty(data.map_link) ? data.map_link : "";

    if (Validator.isEmpty(data.realestate_name)) {
        errors.realestate_name = "Realestate name is required";
    }
    if (Validator.isEmpty(data.address)) {
        errors.address = "Address is required";
    }
    if(Validator.isEmpty(data.city)){
        errors.city = "City is required";
    }
    if(Validator.isEmpty(data.state)){
        errors.state = "State is required";
    }
    if(Validator.isEmpty(data.country)){
        errors.country = "Country is required";
    }
    if(Validator.isEmpty(data.map_link)){
        errors.map_link = "Map link  is required";
    }
    console.log(errors,"errors");
    return {
        errors,
        isValid: isEmpty(errors)
    };


}
