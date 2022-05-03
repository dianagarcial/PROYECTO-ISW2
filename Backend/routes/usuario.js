/*
Rutas de Usuarios
Host + /api/usuario
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/usuario');
const { validarJWT } = require('../middlewares/validarJWT');

const router = Router();

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de minimo 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    crearUsuario
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de minimo 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    loginUsuario
);

router.get('/renew', validarJWT, revalidarToken);

module.exports = router;