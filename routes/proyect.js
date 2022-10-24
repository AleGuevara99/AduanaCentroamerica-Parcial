const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { proyectGet,
    proyectPut,
    proyectPost,
    proyectDelete,
    proyectPatch } = require('../controllers/proyect');


const router = Router();

router.get('/', proyectGet );

router.post('/',[
    validarCampos
], proyectPost );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],proyectPut );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],proyectDelete );


module.exports = router;