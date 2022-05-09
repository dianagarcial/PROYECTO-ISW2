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
        
        const serviciosAseguradora = await Servicio.find( {aseguradoraNombre:nombreAseguradora},{aseguradoraNombre:1, expediente:1 , tipoServicio:1, fecha:1, valor:1,nombreAsegurado:1,placaAsegurado:1});

        //VALIDAR CUANDO ESTE VACIO
   
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
    

    //Toca traer la fecha ene ste formato 
    const fechaTraida = "2022-05-11T00:00:00.000Z";

    const getServiciosDiarios = await Servicio.find( {fecha:fechaTraida} );

   
    res.json({
        ok: true,
        getServiciosDiarios
    });

    //validacion de la fecha, que no este vacia los registros

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