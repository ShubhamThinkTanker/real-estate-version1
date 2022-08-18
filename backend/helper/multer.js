const multer = require("multer");
const path = require("path");

//---***---Define The Place where Image Store---***---//

const userUploadDirPath = path.join(
  __dirname,
  "..",
  "/public/user-profile"
);


//---***---Image Store Using Multer ---***---//


let userImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, userUploadDirPath);
  },
  filename: function (req, file, cb) {
    let exploded_name = file.originalname.split(".");
    let ext = exploded_name[exploded_name.length - 1];
    cb(null, Date.now() + "." + ext);
  },
});

//---***--- Image limit final---***---//

let userImageUpload = multer({
  storage: userImageStorage,
  limits: {
    fileSize: 15000000, // 5MB
  },
  fileFilter: function (req, file, cb) {
    return cb(null, true);
  },
}).fields([{ name: "image", maxCount: 1 }]);




module.exports = {
  userImageUpload
};
