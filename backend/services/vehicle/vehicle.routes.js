const router = require('express').Router();
const vehicleController = require('./vehicle.controller');
const { userAndChairmanAuthenticate } = require('../../helper/guards');

router.post(
	'/create',
	userAndChairmanAuthenticate,
	vehicleController.addVehicle
);

router.get('/:id', vehicleController.get);

router.get('/', vehicleController.findAllvehicle);

router.put(
	'/edit/:id',
	userAndChairmanAuthenticate,
	vehicleController.updatevehicle
);

router.delete('/delete/:id', vehicleController.deletevehicle);

router.post('/delete', vehicleController.deleteMultiplevehicle);

module.exports = router;
