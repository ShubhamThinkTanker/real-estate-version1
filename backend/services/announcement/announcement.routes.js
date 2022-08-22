const router = require('express').Router();
const controller = require('./announcement.controller');
const { ensureAuthenticatedAdmin, ensureAuthenticatedUser, ensureAuthenticatedChairman, ChairmanAndAdminAuthenticate } = require('../../helper/guards');


router.post('/create', controller.create);

router.get('/getAll_Announcement', controller.read);

router.post('/update/:id', controller.update);

router.delete('/delete/:id', controller.delete);

router.get('/get_Announcement/:id', controller.getbyid);

router.delete('/delete_many', controller.deleteMulti);





module.exports = router;