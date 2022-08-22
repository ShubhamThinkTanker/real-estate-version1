const Validator = require("validator");
const isEmpty = require("../isEmpty");


module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.title = !isEmpty(data.title) ? data.title : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.image = !isEmpty(data.image) ? data.image : "";
    data.start_date = !isEmpty(data.start_date) ? data.start_date : "";
    data.end_date = !isEmpty(data.end_date) ? data.end_date : "";
    data.location = !isEmpty(data.location) ? data.location : "";


    if (Validator.isEmpty(data.title)) {
        errors.title = "Title is required.";
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required";
    }
    if (Validator.isEmpty(data.location)) {
        errors.location = "Location field is required";
    }

    if (Validator.isEmpty(data.end_date)) {
        errors.end_date = "To date is required.";
    }

    if (Validator.isEmpty(data.start_date)) {
        errors.start_date = "From date is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};