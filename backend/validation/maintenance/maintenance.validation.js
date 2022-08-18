const Validator = require("validator");
const isEmpty = require("../isEmpty");


module.exports = function validateMaintenance(data) {
    let errors = {};
    data.month = !isEmpty(data.month) ? data.month : "";
    // data.maintenance = !isEmpty(data.maintenance) ? data.maintenance : "";



    if (Validator.isEmpty(data.month)) {
        errors.month = "Month is required.";
    }

    // if (Validator.isEmpty(data.maintenance)) {
    //     errors.maintenance = "Maintenance is required.";
    // }



    return {
        errors,
        isValid: isEmpty(errors)
    };
};