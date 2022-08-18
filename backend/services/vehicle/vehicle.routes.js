const router = require('express').Router();
const vehicleController = require('./vehicle.controller')
const { userAndChairmanAuthenticate } = require('../../helper/guards');

router.post(
    '/create', userAndChairmanAuthenticate,
    vehicleController.addVehicle);

router.get(
    '/get_vehicle/:id',
    vehicleController.get);

router.get(
    '/get_all_vehicle',
    vehicleController.findAllvehicle);

router.put(
    '/update/:id', userAndChairmanAuthenticate,
    vehicleController.updatevehicle);

router.delete(
    '/delete_vehicle/:id',
    vehicleController.deletevehicle);

router.delete(
    '/delete_multiple_vehicle',
    vehicleController.deleteMultiplevehicle);

module.exports = router;