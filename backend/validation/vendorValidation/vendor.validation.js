const Validator = require("validator");
const isEmpty = require("../isEmpty");
const Mongoose = require("mongoose");


module.exports = async function validatecreateInput(data) {
    let errors = {};
    console.log(data, "datavali")
    data.name = !isEmpty(data.name) ? data.name : "";
    data.mobile_no = !isEmpty(data.mobile_no) ? data.mobile_no : "";
    data.profession = !isEmpty(data.profession) ? data.profession : "";
    data.services = !isEmpty(data.services) ? data.services : "";
    data.address = !isEmpty(data.address) ? data.address : "";
    data.lastname = !isEmpty(data.lastname) ? data.lastname : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "First name  is required";
    }
    if (Validator.isEmpty(data.mobile_no)) {
        errors.mobile_no = "Mobile number  is required";
    }
    if (Validator.isEmpty(data.profession)) {
        errors.profession = "Pofession  is required";
    }
    if (Validator.isEmpty(data.services)) {
        errors.services = "Services  is required";
    }
    if (Validator.isEmpty(data.address)) {
        errors.address = "Address  is required";
    }
    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = "Last name  is required";
    }
    if(data.mobile_no){
        var phoneno = /^\d{10}$/;
        if (!data.mobile_no.match(phoneno)) {
            errors.mobile_no = "Mobile number should be 10 digit ";
        }
    }
    console.log(errors, "errors");
    return {
        errors,
        isValid: isEmpty(errors)
    };


}
