/*
    aseguradora Routes
    /api/asegurado
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validarCampos');
const { crearAsegurado} = require('../controllers/asegurado');
const { validarJWT } = require('../middlewares/validarJWT');
//const {  }

const router = Router();

router.post(
    '/newAsegurado', 
    [ // middlewares
        check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
        check('placa', 'La Placa es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono es obligatorio').isInt(),
        validarCampos
        
    ],
    crearAsegurado
);



module.exports = router;
