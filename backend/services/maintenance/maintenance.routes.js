const router = require('express').Router();
const maintenancecontroller = require('./maintenance.controller')


router.post(
    '/create',
    maintenancecontroller.createMaintenance);

router.get(
    '/list',
    maintenancecontroller.maintenanceStructureList);

router.get(
    '/list/:id',
    maintenancecontroller.getbyid);


router.put(
    '/update/:id',
    maintenancecontroller.updateMaintenance);

router.delete(
    '/delete/:id',
    maintenancecontroller.deleteMaintenance);

router.delete(
    '/delete_many',
    maintenancecontroller.deleteMultipleMaintenance);



module.exports = router;