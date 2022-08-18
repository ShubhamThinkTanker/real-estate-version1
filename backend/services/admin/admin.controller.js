const Mongo = require("../../helper/mongodb")
// const AdminLoginSchema = require("../admin/user.model")
const ErrorHandler = require("../../utils/errorhandler");
const bcrypt = require('bcryptjs');
const adminService = require("./admin.services");
const sendToken = require("../../utils/jwtToken");
const validateLoginInput = require('../../validation/adminValidation/adminLogin');
const validateForgotPasswordInput = require('../../validation/adminValidation/forgotPassword');
const isEmpty = require("../../validation/adminValidation/is-empty");
const validateForgotChagePasswordInput = require("../../validation/adminValidation/resetPassword");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");


exports.postLogin = async (req, res, next) => {
  try {
    const { email, password, mobile_num } = req.body
    const { errors, isValid } = validateLoginInput(req.body);
   
    if (!isValid) {
      return res.status(401).json({ "error": true, errors });
    }


    const user = await adminService.is_admin(req.body);

    if (!user ||  !isEmpty(errors)) {
      response = {};
      response.error = true;
      response.message = "missing some field";
      response.errors = "Email Or Mobile Number Does not exists";
      return res.status(422).json(response);
    }
    bcrypt.compare(password, user.password, (err, data) => {

      if (err) throw err


      if (data) {
        const Token = user.getJWTToken()
        sendToken(user, 201, res)
      } else {
        return res.status(401).json({ msg: "Invalid credencial" })
      }
    })


  } catch (error) {
    console.log(error);
  }
}

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email , mobile_num } = req.body
    const { errors, isValid } = validateForgotPasswordInput(req.body);
    if (!isValid || !isEmpty(errors)) {
      response = {};
      response.error = true;
      response.message = "missing some field";
      response.errors = errors;
      return res.status(422).json(response);
    }
    const user = await adminService.FindAdmin(req.body);

    if (user) {
      var token = crypto.randomBytes(20).toString('hex');
      var link = 'admin/resetPassword/' + token;

      const updatetoken = await adminService.Update(token)

      res.status(200).json({ status: 200, link, message: "Check your email for new password" })
    } else {
      res.status(401).json({ error: true, message: "Please Enter Valid Email" })
    }
  } catch (error) {
    console.log(error);
  }

}

exports.resetPassword = async (req, res, next) => {
  try {
    var token = req.params.token;

    const AdminToken = await adminService.Valid_token(token);

    const { errors, isValid } = validateForgotChagePasswordInput(req.body);

    var response = {};

    if (!AdminToken) {
      errors.password = 'Password reset token is invalid or has expired.';
    }

    if (!isValid || !isEmpty(errors)) {
      response.error = true;
      response.message = "missing some field";
      response.errors = errors;
      return res.status(422).json(response);

    } else {
      bcrypt.genSalt(10, (err, salt) => {

        bcrypt.hash(req.body.password, salt, async (err, hash) => {
          const HashPassword = hash
          const updateAdmin = await adminService.UpdatePassword(token, HashPassword);
          res.status(200).json({ error: false, message: "your Password Successfully Changed" })
        });
      });
    }

  } catch (e) {
    next(e)
    // console.log("E", e);
  }
};
