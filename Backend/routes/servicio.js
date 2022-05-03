/*
    servicio Routes
    /api/servicio
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validarCampos');
const { getServicios,crearServicio} = require('../controllers/servicio');
const Aseguradora = require('../models/Aseguradora');
// const { validarJWT } = require('../middlewares/validarJWT');
//const {  }

const router = Router();

router.post(
    '/newServicio', 
    [ // middlewares
        check('tipo_servicio', 'El tipo de Servicio es obligatorio').not().isEmpty(),
        //Revisar la validacion de la hora., como se HACE
        check('hora', 'La hora es obligatoria en formato tal tal tal').custom( isDate ),
        check('origen', 'El origen es obligatorio').not().isEmpty(),
        check('destino', 'El destino es obligatorio').not().isEmpty(),
        check('valor', 'El valor del servicio es obligatorio').isInt(),
        check('correo_cuenta', 'La licencia Click es obligatoria').isEmail(),
        check('contraseña', 'La contraseña de la licencia Click es obligatoria').not().isEmpty(),
        check('operario', 'La cedula del operario es obligatorio').not().isEmpty(),
        check('aseguradora', 'El nombre de la aseguradora es obligatorio').not().isEmpty(),
        // check('asegurado', 'los datos del asegurado son obligatorios').not().isEmpty(),
        validarCampos

        //falta los datos de las relaciones de ASEGURADORA, ASEGURADO,operario
    ],
    crearServicio 
);



module.exports = router;