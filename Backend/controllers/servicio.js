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


//CONSULTAR SERVICIOS POR ASEGURADORA 
// PANTALLA /conServi 

const getServiciosAsegura = async( req, res = response ) => {
    
    const nombreAseguradora =req.params.nombreAseguradora ;

    try {
        
        const serviciosAseguradora = await Servicio.findOne( {aseguradora:nombreAseguradora},{aseguradoraNombre:1, expediente:1 , tipoServicio:1, fecha:1, valor:1});

   
        res.json({
            ok: true,
            serviciosAseguradora
        });

    } catch (error) {
        console.log(error);
        res.json({
            ok: false,
            msg:'Hable con el administrador'
        });
    }

    

}

//CONSULTAR SERVICIOS DIARIOS 
// PANTALLA /conServi 

const getServiciosDiarios = async( req, res = response ) => {
    
    const fechaTraida =req.params.fecha ;

    const getServiciosDiarios = await Servicio.findOne( {fecha:fechaTraida} );

   
    res.json({
        ok: true,
        getServiciosDiarios
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
    crearServicio,
    getServiciosAsegura,
    getServiciosDiarios
}