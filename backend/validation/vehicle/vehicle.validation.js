const Validator = require("validator");
const isEmpty = require("../isEmpty");


module.exports = function validateVehicle(data) {

    let errors = {};
     
    data.vehicle_type = !isEmpty(data.vehicle_type) ? data.vehicle_type : "";
    data.vehicle_no = !isEmpty(data.vehicle_no) ? data.vehicle_no : "";
    data.sticker_status = !isEmpty(data.sticker_status) ? data.sticker_status : "";

    if (Validator.isEmpty(data.vehicle_type)) {
        errors.vehicle_type = "Vehicle type  is required";
    }
    
    if (Validator.isEmpty(data.vehicle_no)) {
        errors.vehicle_no = "Vehicle no  is required";
    }

    if (Validator.isEmpty(data.sticker_status)) {
        errors.sticker_status = "Sticker status is required";
    }



    return {
        errors,
        isValid: isEmpty(errors)
    };
};