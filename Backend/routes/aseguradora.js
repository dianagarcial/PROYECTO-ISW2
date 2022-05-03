/*
    aseguradora Routes
    /api/aseguradora
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validarCampos');
const { getAseguradora,crearAseguradora} = require('../controllers/aseguradora');
// const { validarJWT } = require('../middlewares/validarJWT');
//const {  }

const router = Router();

router.get(
    '/lista',
    getAseguradora
);

router.post(
    '/newAseguradora', 
    [ // middlewares
        check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
        check('expediente', 'El expediente es obligatorio').isInt(),
        validarCampos
    ],
    crearAseguradora 
);



module.exports = router;
