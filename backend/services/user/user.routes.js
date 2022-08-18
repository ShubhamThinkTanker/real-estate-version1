const router = require('express').Router();
const controller = require('./user.controller');
const { ensureAuthenticatedAdmin, ensureAuthenticatedUser, ensureAuthenticatedChairman, userAndAdminAuthenticate, chairmanAndAdminAuthenticate } = require('../../helper/guards');
const multer = require('multer');


var storage = multer.diskStorage({
    destination: function destination(req, file, cb) {
        cb(null, "uploads");
    },
    filename: function filename(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now());
    },
});
var upload = multer({
    storage: storage,
});

router.post('/login', controller.login);
router.post('/chairman_register', ensureAuthenticatedAdmin, controller.chairmanRegister);
router.post('/user_register', chairmanAndAdminAuthenticate, controller.userRegister);

router.post('/forgotpassword', controller.forgotPassword);
router.post('/resetPassword/:token', controller.resetPassword);

router.get('/get_all_chairman', controller.getAllChairman);
router.get('/get_all_user', controller.getAllUser);

router.get('/get_data/:id', controller.get);
router.put('/update/:id', controller.update);

router.delete('/delete/:id', controller.delete);
router.post('/delete_many', controller.deleteMulti);

router.get('/country', controller.GetAllCountry);

module.exports = router;
