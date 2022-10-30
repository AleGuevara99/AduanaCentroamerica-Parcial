const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { proyectcrGet,
    proyectcrPut,
    proyectcrPost,
    proyectcrDelete,
    proyectcrPatch } = require('../controllers/proyectcr');


const router = Router();

router.get('/', proyectcrGet );

router.post('/',[
    validarCampos
], proyectcrPost );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],proyectcrPut );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],proyectcrDelete );


module.exports = router;