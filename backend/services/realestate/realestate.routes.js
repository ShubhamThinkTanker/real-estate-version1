const router = require('express').Router();
const realestatecontroller = require('./realestate.controller')

//Role route

//Create Role
router.post(
    '/add',
    realestatecontroller.addrealestate);

//get Role    
router.get(
    '/find', 
    realestatecontroller.getrealestate)

//updtae role
router.put(
    '/update/:id', 
    realestatecontroller.updaterealestate)

//getbyid
router.get(
    '/findid/:id',
    realestatecontroller.getbyid)

//delete realestate
router.delete(
    '/delete/:id', 
    realestatecontroller.deleterealestate)

module.exports = router;