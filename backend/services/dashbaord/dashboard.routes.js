const router = require('express').Router();
const controller = require('./dashboardController');
const { ensureAuthenticatedAdmin, ensureAuthenticatedUser, ensureAuthenticatedChairman, ChairmanAndAdminAuthenticate } = require('../../helper/guards');


router.get('/chairmandetail', controller.getChairman);

router.get('/getUser', controller.getUser);


module.exports = router;