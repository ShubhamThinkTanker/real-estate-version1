const router = require('express').Router();
const rolecontoller = require('./role.controller')

//Role route

//Create Role
router.post(
    '/add',
    rolecontoller.addrole);

//get role
router.get(
    '/find', 
    rolecontoller.getrole)

//updtae role
router.put(
    '/updaterole/:id', 
    rolecontoller.updaterole)

//delete role
router.delete(
    '/deleterole/:id', 
    rolecontoller.deleterole)

//getbyid
router.get(
    '/findid/:id',
    rolecontoller.getbyid)

module.exports = router;