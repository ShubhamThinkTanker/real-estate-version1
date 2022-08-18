const router = require('express').Router();
const vendorController = require('./vendor.controller')

//create vendor
router.post(
    '/create',
    vendorController.createVendor);

//get vendor
router.post(
    '/findAll', 
    vendorController.getVendor)

//updtae vendor
router.put(
    '/updatevendor/:id', 
    vendorController.updateVendor)

//delete vendor
router.delete(
    '/deletevendor/:id', 
    vendorController.deleteVendor)

//getbyid
router.get(
    '/findById/:id',
    vendorController.getbyid)

//multi delete
router.post(
    '/deletemultiple',
    vendorController.deleteMulti)


module.exports = router;