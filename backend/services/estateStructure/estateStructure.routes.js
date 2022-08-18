const router = require('express').Router();
const estateStructurecontroller = require('./estateStructure.controller')


router.post(
    '/create',
    estateStructurecontroller.addEstateStructure);


router.get(
    '/list',
    estateStructurecontroller.estateStructureList);

router.get(
    '/singleList/:id',
    estateStructurecontroller.singleEstateStructureList);


router.put(
    '/update/:id',
    estateStructurecontroller.updateEstateStructure);


router.delete(
    '/delete/:id',
    estateStructurecontroller.deleteEstateStructure);

module.exports = router;