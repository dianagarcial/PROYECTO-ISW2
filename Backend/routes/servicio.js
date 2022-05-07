/*
    servicio Routes
    /api/servicio
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validarCampos');
const { getServicios,crearServicio} = require('../controllers/servicio');
// const { validarJWT } = require('../middlewares/validarJWT');


const router = Router();

router.get('/listarServicios', getServicios);

router.post(
        '/newServicio', 
        [ // middlewares
            check('tipoServicio', 'El tipo de Servicio es obligatorio').not().isEmpty(),
            check('hora', 'La hora es obligatoria en formato tal tal tal').custom( isDate ),
            check('origen', 'El origen es obligatorio').not().isEmpty(),
            check('destino', 'El destino es obligatorio').not().isEmpty(),
            check('valor', 'El valor del servicio es obligatorio').isInt(),
            check('correoCuenta', 'La licencia Click es obligatoria').isEmail(),
            check('contraseña', 'La contraseña de la licencia Click es obligatoria').not().isEmpty(),
            check('nombreAsegurado', 'El nombre del asegurado es obligatorio').not().isEmpty(),
            check('placaAsegurado', 'La placa del asegurado es obligatoria').not().isEmpty(),
            check('telefonoAsegurado', 'El telefono del asegurado es obligatorio').not().isEmpty(),
            check('aseguradoraNombre', 'La aseguradora es obligatoria').not().isEmpty(),
            check('aseguradoraTecnico', 'El tecnico de la aseguradora es obligatorio').not().isEmpty(),
            check('operario', 'El id del operario es obligatorio').not().isEmpty(),
            
            
            validarCampos
        
        ],
        crearServicio
    );


module.exports = router;