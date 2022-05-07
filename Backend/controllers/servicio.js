const { response } = require('express');
const Servicio = require('../models/Servicio');

const getServicios = async( req, res = response ) => {

    const servicios = await Servicio.find();

    res.json({
        ok: true,
        servicios
    });

}




const getServiciosTodosDatos = async( req, res = response ) => {

    const servicios = await Servicio.find().populate('operarios',{
        nombre_usuario : 0 , 
        contraseña : 0 ,
        cedula : 1 ,
        rh : 0 ,
        edad : 0 ,
        nombre_completo : 1 ,
        telefono :  1 ,
        estado :0

    });

    res.json({
        ok: true,
        servicios
    });

}

// const getServiciosXOperario = async ( req, res = response ) => {

//     try {

//         const serviciosOperario  = await Servicio.();

//         res.json({
//             ok: true,
//             servicio: serviciosOperario
//         });

//     } catch (error) {
        
//         console.log(error)
//         res.status(500).json({
//             ok: false,
//             msg: 'Hable con el administrador'
//         });

//     }

// }


const crearServicio = async ( req, res = response) => {

    const servicio = new Servicio ( req.body );
    //const { operario } = req.body;

    try {

        servicio.user = req.uid;

        const servicioGuardado = await servicio.save();

        res.json({
            ok: true,
            servicio: servicioGuardado
        });
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
        
    }

}



module.exports = {
    getServicios,
    crearServicio,
    getServiciosTodosDatos
}