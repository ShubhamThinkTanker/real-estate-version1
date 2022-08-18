let messages = require("./resources/messages.json");

const getMessage = (code, defaultcode) => {
  return messages[code] ? messages[code] : messages[defaultcode];
};

exports.success = (res, statusCode = 200, message, data = {}) => {
  const resData = {
    error: false,
    message: message,
    statusCode: statusCode,
    data,
  };
  return res.status(statusCode).json(resData);
};
exports.  customErrorResponse = (res, statusCode = 200, message, errors = {}) => {
  const resData = {
    error: true,
    statusCode: statusCode,
    message: message,
    errors
  };
  return res.status(statusCode).json(resData);
};



// exports.getErrorMessage = (res, message, statusCode = 422) => {
//   // console.log(message,"SS");
//   const resData = {
//     error: true,
//     message: message,
//     statusCode: statusCode,

//   };
//   return res.status(statusCode).send(resData);
//   };

// console.log(message,"SS");
exports.customResponse = (res, message = getMessage(code, "DEFAULT"), statusCode = 200, data = {}) => {
  const resData = {
    error: true,
    message: message,
    statusCode: statusCode,
    data,
  };
  return res.status(statusCode).json(resData);
};

exports.notFound = (res, message = getMessage(code, "DEFAULTERR") || "Invalid request data", statusCode = 404, code = "", data = {}) => {
  const resData = {
    error: true,
    message: message,
    statusCode: statusCode,
    data
  };
  return res.status(statusCode).send(resData);
};

exports.unAuthentication = (res, message = getMessage(code, "DEFAULT_AUTH"), statusCode = 401, data = {}) => {
  const resData = {
    error: true,
    message: message,
    statusCode: statusCode,
    data,
  };
  return res.status(statusCode).send(resData);
};



// exports.getErrorMessage = (code, defaultcode) => {
//     return getMessage(code, defaultcode);
//   };
