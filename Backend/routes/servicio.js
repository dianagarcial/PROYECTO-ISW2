/*
    servicio Routes
    /api/servicio
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validarCampos');
const { getServiciosPorId,getSaldoOperario, getdetOperario, getServiciosOpera,
     getdetOperarioPendiente,getServiciosDiarios, getServiciosAsegura,
      getServicios, crearServicio,getdetServicio, actualizarEstado} = require('../controllers/servicio');
// const { validarJWT } = require('../middlewares/validarJWT');


const router = Router();

router.get('/listarServicios', getServicios);

//ROUTE FROM ASEGURADORA 
router.get('/serDiario', getServiciosDiarios);

//ROUTE FROM ASEGURADORA 
router.get('/serAsegura/:nombreAseguradora', getServiciosAsegura);

//OPERARIO
router.get('/serOperario', getServiciosOpera);

//DETALLE DEL OPERARIO
router.get('/detOpe/:operario', getdetOperario);

//DETALLES DEL SERVICIO
router.get('/detServicio/:_id', getdetServicio);

//
router.get('/detOpePen/:operario', getdetOperarioPendiente);

//
router.get('/saldoOperario', getSaldoOperario);



router.get('/servicioID/:_id', getServiciosPorId);

router.post(
        '/newServicio', 
        [ // middlewares
            check('tipoServicio', 'El tipo de Servicio es obligatorio').not().isEmpty(),
            check('fecha', 'La fecha es del servicio es obligatoria').custom( isDate ),
            check('hora', 'La hora es obligatoria en formato tal tal tal').not().isEmpty(),
            check('origen', 'El origen es obligatorio').not().isEmpty(),
            check('destino', 'El destino es obligatorio').not().isEmpty(),
            check('valor', 'El valor del servicio es obligatorio').isInt(),
            check('licenciaClick', 'La licencia Click es obligatoria').isEmail(),
            check('contraseñaClick', 'La contraseña de la licencia Click es obligatoria').not().isEmpty(),
            check('nombreAsegurado', 'El nombre del asegurado es obligatorio').not().isEmpty(),
            check('placaAsegurado', 'La placa del asegurado es obligatoria').not().isEmpty(),
            check('telefonoAsegurado', 'El telefono del asegurado es obligatorio').not().isEmpty(),
            check('expediente','El número de expediente es obligatorio').isInt(),
            check('aseguradoraNombre', 'La aseguradora es obligatoria').not().isEmpty(),
            check('estadoServicio','El estado del servicio es obligatorio').not().isEmpty(),
            check('operario', 'El id del operario es obligatorio').not().isEmpty(),
            
            
            validarCampos
        
        ],
        crearServicio
    );

router.put('/:id/:nuevoEstado', actualizarEstado);


module.exports = router;