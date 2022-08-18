const router = require('express').Router();
const estateStructurecontroller = require('./estateStructure.controller')

const {ensureAuthenticatedChairman} = require('../../helper/guards')
router.post(
    '/create',ensureAuthenticatedChairman,
    estateStructurecontroller.addEstateStructure);


router.get(
    '/list',
    estateStructurecontroller.estateStructureList);

router.get(
    '/singleList/:id',
    estateStructurecontroller.singleEstateStructureList);


router.put(
    '/update/:id',ensureAuthenticatedChairman,
    estateStructurecontroller.updateEstateStructure);


router.delete(
    '/delete/:id',
    estateStructurecontroller.deleteEstateStructure);

router.delete(
        '/delete_multiple_estatestructure',
        estateStructurecontroller.deleteMultipleEstateStructure);

module.exports = router;