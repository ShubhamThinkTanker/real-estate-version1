const Validator = require("validator");
const isEmpty = require("../isEmpty");


module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.title = !isEmpty(data.title) ? data.title : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.image = !isEmpty(data.image) ? data.image : "";
    data.from_date = !isEmpty(data.from_date) ? data.from_date : "";
    data.to_date = !isEmpty(data.to_date) ? data.to_date : "";
   

    if (Validator.isEmpty(data.title)) {
        errors.title = "Title is required.";
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required";
    }
    // if (Validator.isEmpty(data.image)) {
    //     errors.image = "image field is required";
    // }
   
    if (Validator.isEmpty(data.to_date)) {
        errors.to_date = "To date is required.";
    }

    if (Validator.isEmpty(data.from_date)) {
        errors.from_date = "From date is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};