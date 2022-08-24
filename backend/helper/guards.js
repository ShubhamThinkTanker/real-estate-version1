const UserModel = require('../services/user/user.model');
const jwt = require('jsonwebtoken');
const { commonResponse, commonFunctions, customErrorResponse } = require("../helper");


exports.ensureAuthenticatedAdmin = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await UserModel.findOne({ _id: decoded.id, role: "admin" });

            next();
        } catch (error) {

            console.log(error, "res");

            // return commonResponse.customErrorResponse(res, 401, "Not authorized,token failed", error);
            return res.json({ "error": true, "statusCode": 401, "message": "Not authorized,token failed", "errors": error.message });
        }
    }
    if (!token) {
        return res.json({ "error": true, "statusCode": 401, "message": "Not authorized", "errors": 'No token' });
    }
};

exports.ensureAuthenticatedUser = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await UserModel.findOne({ _id: decoded.id, role: "user" });

            next();
        } catch (error) {

            console.log(error, "res");

            // return commonResponse.customErrorResponse(res, 401, "Not authorized,token failed", error);
            return res.json({ "error": true, "statusCode": 401, "message": "Not authorized,token failed", "errors": error.message });
        }
    }
    if (!token) {
        return res.json({ "error": true, "statusCode": 401, "message": "Not authorized", "errors": 'No token' });
    }
};

exports.ensureAuthenticatedChairman = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await UserModel.findOne({ _id: decoded.id, role: "chairman" });

            next();
        } catch (error) {

            console.log(error, "res");

            // return commonResponse.customErrorResponse(res, 401, "Not authorized,token failed", error);
            return res.json({ "error": true, "statusCode": 401, "message": "Not authorized,token failed", "errors": error.message });
        }
    }
    if (!token) {
        return res.json({ "error": true, "statusCode": 401, "message": "Not authorized", "errors": 'No token' });
    }
};

exports.userAndChairmanAuthenticate = async (req, res, next) => {
    let token;
    
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            role = {
                $or: [{ role: "user" }, { role: "chairman" }],
            };
            req.user = await UserModel.findOne({ $and: [{ _id: decoded.id }, role] });
            
            next();
        } catch (error) {

            console.log(error, "res");

            // return commonResponse.customErrorResponse(res, 401, "Not authorized,token failed", error);
            return res.json({ "error": true, "statusCode": 401, "message": "Not authorized,token failed", "errors": error.message });
        }
    }
    if (!token) {
        return res.json({ "error": true, "statusCode": 401, "message": "Not authorized", "errors": 'No token' });
    }
};

exports.chairmanAndAdminAuthenticate = async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            role = {
                $or: [{ role: "admin" }, { role: "chairman" }],
            };
            req.user = await UserModel.findOne({ $and: [{ _id: decoded.id }, role] });

            next();
        } catch (error) {

            console.log(error, "res");

            // return commonResponse.customErrorResponse(res, 401, "Not authorized,token failed", error);
            return res.json({ "error": true, "statusCode": 401, "message": "Not authorized,token failed", "errors": error.message });
        }
    }
    if (!token) {
        return res.json({ "error": true, "statusCode": 401, "message": "Not authorized", "errors": 'No token' });
    }
};