const Validator = require("validator");
const isEmpty = require("../isEmpty");


module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.mobile_no = !isEmpty(data.mobile_no) ? data.mobile_no : "";
    data.gender = !isEmpty(data.gender) ? data.gender : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required.";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is required";
    }



    if (Validator.isEmpty(data.gender)) {
        errors.gender = "Gender is required.";
    }

   

    if (Validator.isEmpty(data.mobile_no)) {
        errors.mobile_no = "Mobile number is required";
    }
    var phoneno = /^\d{10}$/;
    if (!data.mobile_no.match(phoneno)) {
        errors.mobile_no = "Mobile number should be 10 digit";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};