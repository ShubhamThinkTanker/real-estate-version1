const Validator = require("validator");
const isEmpty = require("../isEmpty");
const Mongoose = require("mongoose");

module.exports = async function validatecreateInput(data) {
    let errors = {};
    // console.log(data, "datavali")
    data.role_name = !isEmpty(data.role_name) ? data.role_name : "";
    data.role_id = !isEmpty(data.role_id) ? data.role_id : "";

    if (Validator.isEmpty(data.role_name)) {
        errors.role_name = "Roll name is required";
    }
    if (Validator.isEmpty(data.role_id)) {
        errors.role_id = "Roll id is required";
    }
    // console.log(errors, "errors");
    return {
        errors,
        isValid: isEmpty(errors)
    };


}
