const Validator = require("validator");
const isEmpty = require('../isEmpty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  // console.log(data.mobile_no, "shubham");

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.mobile_no = !isEmpty(data.mobile_no) ? data.mobile_no : "";
  data.role = !isEmpty(data.role) ? data.role : "";

  if (Validator.isEmpty(data.username)) {
    errors.username = "Email or Mobile no is Required";
  }


  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (Validator.isEmpty(data.role)) {
    errors.role = "Role is required";
  }
  console.log(errors, "isEmpty(errors)");


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
