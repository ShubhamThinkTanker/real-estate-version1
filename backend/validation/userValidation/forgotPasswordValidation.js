const Validator = require("validator");
const isEmpty = require("../isEmpty");


module.exports = function validateForgotPasswordInput(data) {


    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.mobile_no = !isEmpty(data.mobile_no) ? data.mobile_no : "";


    // if (data.email) {
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // } else if (data.mobile_no) {
    //     var phoneno = /^\d{10}$/;
    //     if (!data.mobile_no.match(phoneno)) {
    //         errors.mobile_no = "Mobile Number Does not valid";
    //     }
    // }


    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }




    return {
        errors,
        isValid: isEmpty(errors)
    };
}