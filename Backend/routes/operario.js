/*
    Rutas de Operarios / Auth
    host + /api/operario
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const { getOperarios,getOperarioCedula,crearOperario, revalidarToken } = require('../controllers/operario');
const { validarJWT } = require('../middlewares/validarJWT');

const router = Router();

router.get('/listaOperarios', getOperarios);

router.get('/cedulaOpe', getOperarioCedula);

router.post(
    '/newOperario', 
    [ // middlewares
        check('nombre_usuario', 'El nombre es obligatorio').not().isEmpty(),
        check('contraseña', 'La contraseña debe ser de 6 caracteres').isLength({ min: 6 }),
        check('cedula', 'La cedula es obligatoria').isInt().isLength({min:6}),
        check('rh', 'El tipo de sangre es obligatorio').not().isEmpty(),
        check('edad', 'La edad es obligatorio').isInt(),
        check('nombre_completo', 'El nombre es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono es obligatorio').isInt(),
        check('estado', 'El estado es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearOperario 
);


router.get('/renew', validarJWT ,revalidarToken );


module.exports = router;