const { response } = require('express');
const Servicio = require('../models/Servicio');
const Operario = require('../models/Operario');

const getServicios = async( req, res = response ) => {

    const servicios = await Servicio.find();

    res.json({
        ok: true,
        servicios
    });

}

const crearServicio = async ( req, res = response) => {

    const servicio = new Servicio ( req.body );

    const {operario} = req.body;

    
   
    try {

        const getIdfromOperario = await Operario.findOne({ cedula:operario });
   
        servicio.operario=getIdfromOperario._id;

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
    crearServicio
}