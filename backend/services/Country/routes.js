const router = require('express').Router();
const controller = require('./controller')

router.post(
    '/get_all_country',
    controller.GetAllCountry);

module.exports = router;