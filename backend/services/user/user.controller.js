const ChairmanModel = require("./user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const sendToken = require("../../utils/jwtToken");
const Cryptr = require('cryptr');
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const ChairmanService = require("./user.services");
const isEmpty = require("../../validation/isEmpty");
const { commonResponse, commonFunctions, customErrorResponse } = require("../../helper");
const validateRegisterInput = require('../../validation/userValidation/user.validation')
const validateSecurityInput = require('../../validation/userValidation/profileSecurity.validation.js')

const validateLoginInput = require('../../validation/userValidation/loginValidation');
const validateForgotPasswordInput = require('../../validation/userValidation/forgotPasswordValidation');
const validateForgotChagePasswordInput = require("../../validation/userValidation/resetPasswordValidation");
const { deleteImage } = require("../../helper/s3aws");
var generator = require("generate-password");
const { Country, State, City } = require("country-state-city")
var { faker } = require('@faker-js/faker');
const { log } = require("console");

module.exports = {


    fakers: async (req, res, next) => {

        let users = [];
        for (let i = 0; i < 50; i++) {
            let obj = {}
            let gender = faker.name.gender(true)
            let name = faker.name.firstName(gender);
            let email = faker.internet.email();
            let mobile_no = faker.phone.number();
            let profile_image = faker.image.avatar()
            let password = faker.name.lastName()
            let country = 'india'
            let state = 'gujrat'
            let city = 'Ahemedabad'
            let address = '561 Odhav'
            let role = 'user'
            users.push({
                "name": name,
                "email": email,
                "mobile_no": mobile_no,
                "profile_image": profile_image,
                "password": password,
                "gender": gender,
                "country": country,
                "state": state,
                "city": city,
                "address": address,
                "role": role
            });
        }
        console.log(users, ":users");

        ChairmanModel.insertMany(users).then(function () {
            console.log("Data inserted")  // Success
        }).catch(function (error) {
            console.log(error)      // Failure
        });
        // await newChairman.save()
    },


    GetAllCountry: async (req, res, next) => {
        try {

            let Countrys = require('country-state-city').City;
            // let State = require('country-state-city').State;
            res.json({ "message": Countrys.getAllCountries() })



            console.log(State.getAllStates(), ":Country");

        } catch (error) {
            console.log(error, ":error");
        }
    },



    chairmanRegister: async (req, res, next) => {
        try {
            if (!req.user) {
                return res.json({ "error": true, "statusCode": 401, "message": "Invalid Admin login", "errors": "Only Admin can able to create Chairman " });
            }
            let id = req.user._id

            var { errors, isValid } = validateRegisterInput(req.body)

            let is_exist = await ChairmanService.is_email_exist(req.body);
            let is_mobile_exist = await ChairmanService.is_mobile_no_exist(req.body);
            if (is_exist || is_mobile_exist) {
                if (is_exist && is_mobile_exist) {
                    errors.email = "email is already exist"
                    errors.mobile_no = "mobile no is already exist"
                } else if (!is_exist && is_mobile_exist) {
                    errors.mobile_no = "mobile no is already exist"
                } else if (is_exist && !is_mobile_exist) {
                    errors.email = "email is already exist"
                }
            }


            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            if (req.files != undefined && req.files.profile_image != undefined) {
                req.body.profile_image = req.files.profile_image;
            }

            var password = generator.generate({
                length: 10,
                numbers: true,
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) throw err;
                    const email = req.body.email

                    var transporter = nodemailer.createTransport({
                        host: "mail.thinktanker.in",
                        port: 465,
                        auth: {
                            user: "shubham@thinktanker.in",
                            pass: "Shubham@Think300"
                        }
                    });

                    const mailOptions = {
                        from: "shubham@thinktanker.in",
                        to: email,
                        subject: "Reset Password",
                        html: `Password : ${password}`,
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error.message, ":errorrrrrr");
                        } else {
                            console.log("success", info);
                        }
                    });

                    let Chairman = await ChairmanService.chairmanCreate(req.body, id, hash);

                    if (Chairman) {
                        return commonResponse.success(res, 201, "Successfully Create Chairman", Chairman);

                    } else {
                        errors.error = "Something went wrong, Please try again Later"
                        return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
                    }

                })
            });
        }
        catch (error) {
            console.log("Create New User Not Success --> ", error);
            return next(error);
            // return commonResponse.customErrorResponse(res, 422, 'Create New User Not Success', errors);
        }
    },

    userRegister: async (req, res, next) => {
        try {
            if (!req.user) {
                return res.json({ "error": true, "statusCode": 401, "message": "Invalid User login", "errors": "Invalid Login credential" });
            }
            let id = req.user._id

            var { errors, isValid } = validateRegisterInput(req.body)
            let is_exist = await ChairmanService.is_email_exist(req.body);
            let is_mobile_exist = await ChairmanService.is_mobile_no_exist(req.body);
            if (is_exist || is_mobile_exist) {
                if (is_exist && is_mobile_exist) {
                    errors.email = "email is already exist"
                    errors.mobile_no = "mobile no is already exist"
                } else if (!is_exist && is_mobile_exist) {
                    errors.mobile_no = "mobile no is already exist"
                } else if (is_exist && !is_mobile_exist) {
                    errors.email = "email is already exist"
                }
            }

            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }



            if (req.files != undefined && req.files.profile_image != undefined) {
                req.body.profile_image = req.files.profile_image;
            }

            var password = generator.generate({
                length: 10,
                numbers: true,
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) throw err;
                    const email = req.body.email

                    var transporter = nodemailer.createTransport({
                        host: "mail.thinktanker.in",
                        port: 465,
                        auth: {
                            user: "shubham@thinktanker.in",
                            pass: "Shubham@Think300"
                        }
                    });




                    const mailOptions = {
                        from: "shubham@thinktanker.in",
                        to: email,
                        subject: "Reset Password",
                        html: `Password : ${password}`,
                    };

                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error.message);
                        } else {
                            console.log(info, ":success");
                        }
                    });


                    let user = await ChairmanService.userCreate(req.body, id, hash);


                    if (user) {
                        return commonResponse.success(res, 200, "Successfully Create User", user);

                    } else {
                        errors.error = "Something went wrong, Please try again Later"
                        return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
                    }

                })
            });
        }
        catch (error) {
            console.log("Create New User Not Success --> ", error);
            return next(error);
        }
    },

    login: async (req, res, next) => {
        try {
            const { mobile_no, role, password, username } = req.body
            const { errors, isValid } = validateLoginInput(req.body)
            if (!isValid) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            const user = await ChairmanService.login(req.body);

            if (!user || !isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', "Email Or Mobile Number Does not exists");
            }
            else if (user.role != role) {
                errors.role = 'Role Does Not valid'
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            bcrypt.compare(password, user.password, (err, data) => {
                if (err) throw err
                if (data) {
                    if (user.role == "admin") {

                        const token = "Bearer " + user.getJWTToken()
                        return commonResponse.success(res, 200, 'Successfully Login', { User_Details: user, Token: token });

                    } else if (user.role == "chairman") {

                        const token = "Bearer " + user.getJWTToken()
                        return commonResponse.success(res, 200, 'Successfully Login', { User_Details: user, Token: token });

                    } else if (user.role == "user") {

                        const token = "Bearer " + user.getJWTToken()
                        return commonResponse.success(res, 200, 'Successfully Login', { User_Details: user, Token: token });

                    }
                } else {
                    errors.password = 'Invalid Password'
                    return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
                }
            })

        } catch (error) {
            console.log(error);
        }
    },

    forgotPassword: async (req, res, next) => {
        try {
            const { email, mobile_num } = req.body
            const { errors, isValid } = validateForgotPasswordInput(req.body);

            if (!isValid || !isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }

            const user = await ChairmanService.FindAdmin(req.body);

            if (user) {
                var token = crypto.randomBytes(20).toString('hex');
                var link = 'api/resetPassword/' + token;
                var id = user._id
                const updatetoken = await ChairmanService.Update(token, id)
                var transporter = nodemailer.createTransport({
                    host: "smtp.mailtrap.io",
                    port: 2525,
                    auth: {
                        user: "00d0c4a72fb12a",
                        pass: "4fa0e92a90b973"
                    }
                });


                const mailOptions = {
                    from: "subhamvaishnav85340@gmail.com",
                    to: user.email,
                    subject: "Reset Password",
                    html: `ResetPassword-Link : ${link}`,
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error.message);
                    }
                });
                return commonResponse.success(res, 200, 'Check your email for new password', link);
            } else {
                errors.user = "Please Enter Valid Email Or Mobile Number"
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
        } catch (error) {
            console.log(error);
        }
    },

    resetPassword: async (req, res, next) => {
        try {
            var token = req.params.token;
            const TokenVerify = await ChairmanService.Valid_token(token);
            const { errors, isValid } = validateForgotChagePasswordInput(req.body);
            var response = {};

            if (!TokenVerify) {
                errors.password = 'Password reset token is invalid or has expired.';
            }

            if (!isValid || !isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, async (err, hash) => {
                        const HashPassword = hash
                        const updateAdmin = await ChairmanService.UpdatePassword(token, HashPassword);
                        return commonResponse.success(res, 200, 'your Password Successfully Changed',);
                    });
                });
            }
        } catch (e) {
            next(e)
        }
    },

    getAllChairman: async (req, res, next) => {
        try {
            const { page = 1, limit = 10 } = req.query
            let order_column = req.query.order_column || "name";
            let sort_order = req.query.sort_order == "asc" ? "ASC" : "DESC";
            let sort_array = [order_column, sort_order];
            let filter_value = req.query.filter_value || "";
            let status = req.query.status || "";
            console.log(status, ":status");
            let findAllUser = await ChairmanService.getAllChairman(req.query, sort_array, filter_value, status);
            let Total_count = await ChairmanModel.countDocuments({ role: "chairman" })
            let Total_active = await ChairmanModel.countDocuments({ status: "active" })
            let Total_inactive = await ChairmanModel.countDocuments({ status: "inactive" })

            console.log(Total_inactive, "Total_inactive", "------", Total_active, ":Total_active");

            // console.log(Total_count, ":Total_count");
            if (findAllUser) {
                return commonResponse.success(res, 200, 'Successfully get All Chairman', { TotalCount: Total_count, TotalActive: Total_active, TotalInActive: Total_inactive, Chairman_Details: findAllUser });
            } else {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
        }
        catch (error) {
            console.log("Find All User Not Success --> ", error);
            return next(error);
        }
    },

    getAllUser: async (req, res, next) => {
        try {
            const { page = 1, limit = 10 } = req.query
            let order_column = req.query.order_column || "name";
            let sort_order = req.query.sort_order == "asc" ? "ASC" : "DESC";
            let sort_array = [order_column, sort_order];
            let filter_value = req.query.filter_value || "";
            let status = req.query.status || "";
            let findAllUser = await ChairmanService.getAlluser(req.query, sort_array, filter_value, status);
            let Total_count = await ChairmanModel.countDocuments({ role: "user" })

            if (findAllUser) {
                return commonResponse.success(res, 200, 'Successfully get All User', { TotalCount: Total_count, User_Details: findAllUser });
            } else {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }
        }
        catch (error) {
            console.log("Find All User Not Success --> ", error);
            return next(error);
        }
    },

    get: async (req, res, next) => {
        try {
            var id = req.params.id
            let findUserById = await ChairmanService.get(id);

            if (findUserById) {
                commonResponse.success(res, 200, 'Successfully Get User By Id', findUserById);
            }
            else {
                errors.error = "User_Not_Found"
                return commonResponse.customErrorResponse(res, 400, 'Something went wrong', errors);
            }

        } catch (error) {
            return next(error);
        }
    },

    update: async (req, res, next) => {
        try {
            var id = req.params.id
            var { errors, isValid } = validateRegisterInput(req.body)
            let is_exist = await ChairmanService.is_email_exist(req.body);
            let is_mobile_exist = await ChairmanService.is_mobile_no_exist(req.body);

            if (is_exist || is_mobile_exist) {
                if (is_exist && is_mobile_exist && is_exist._id != id && is_mobile_exist._id != id) {
                    errors.email = "email is already exist"
                    errors.mobile_no = "mobile no is already exist"
                } else if (!is_exist && is_mobile_exist && is_mobile_exist._id != id) {
                    errors.mobile_no = "mobile no is already exist"
                } else if (is_exist && !is_mobile_exist && is_exist._id != id) {
                    errors.email = "email is already exist"
                }
            }

            if (!isEmpty(errors)) {
                return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
            }


            if (req.files != undefined && req.files.profile_image != undefined) {
                req.body.profile_image = req.files.profile_image;
            }

            let updatedUser = await ChairmanService.update(id, req.body);
            // console.log(updatedUser,"updatedUser");

            if (updatedUser['error'] == undefined) {
                commonResponse.success(res, 200, 'Successfully update User By Id', updatedUser);
            } else {
                errors.error = "User_Not_Found"
                return commonResponse.customErrorResponse(res, 400, 'Something went wrong', errors);
            }
        }
        catch (error) {
            return next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            var id = req.params.id
            let deletedUser = await ChairmanService.delete(id);

            if (deletedUser['error'] == undefined) {
                commonResponse.success(res, 200, 'Successfully delete User By Id', deletedUser);
            } else {
                errors = "User_Not_Found"
                return commonResponse.customErrorResponse(res, 400, 'Something went wrong', errors);
            }

        } catch (error) {
            return next(error);
        }
    },

    deleteMulti: async (req, res, next) => {
        try {
            let id = req.body.id
            let getData = await ChairmanService.deletemulti(id);

            if (getData.deletedCount == 0) {
                return commonResponse.customErrorResponse(res, 422, 'Can not find data of this id ');
            } else {
                return commonResponse.success(res, 200, "successfully deleted multiple", getData);
            }

        } catch (error) {
            return next(error);
        }
    },

    profilesecurity: async (req, res, next) => {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await ChairmanModel.findOne({ _id: decoded.id });

            if (req.user) {

                var { errors, isValid } = validateSecurityInput(req.body)
                if (!isEmpty(errors)) {
                    return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
                }

                bcrypt.compare(req.body.currentpassword, req.user.password, (err, data) => {


                    if (data) {
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(req.body.newpassword, salt, async (err, hash) => {
                                let id = req.user._id

                                let password = await ChairmanService.updatepassword(id, hash);
                                if (password) {
                                    return commonResponse.success(res, 201, "Successfully Create Chairman", password);

                                } else {
                                    errors.error = "Something went wrong, Please try again Later"
                                    return commonResponse.customErrorResponse(res, 422, 'Something went wrong', errors);
                                }
                            })
                        })
                    } else {
                        errors.currentpassword = "Password does not match to your old password"
                        return commonResponse.customErrorResponse(res, 401, 'Something went wrong', errors);
                    }
                })
            }


        } catch (error) {
            console.log(error);
        }
    }

}

