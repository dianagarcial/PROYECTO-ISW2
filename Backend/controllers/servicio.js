const { response } = require('express');
const moment = require('moment');
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
    
    const fechaHoy = moment().format('YYYY-MM-DD');

    const getServiciosDiarios = await Servicio.find( {fecha:fechaHoy}).populate('operario',{nombre_completo:1});
   
    res.json({
        ok: true,
        getServiciosDiarios
    });

}

//CONSULTAR SERVICIOS POR OPERARIO
// PANTALLA /conServi 


//falta acomodar
const getServiciosOpera = async( req, res = response ) => {

    const primerDiaMes = moment().subtract('months').startOf('month').format('DD-MM-YYYY')
    console.log(primerDiaMes);

    const ultimoDiaMes = moment().subtract('months').endOf('month').format('DD-MM-YYYY')
    console.log(ultimoDiaMes);


    try {
        
        //const serviciosAseguradora = await Servicio.aggregate( {"$group" : {operario:"$operario", count:{$sum:1}}});
         //,{valor:1}).populate('operario',{nombre_completo:1,cedula:1,telefono:1}
        const operarioxMes = await Servicio.find()
                                            .select()
                                            .count();

        //VALIDAR CUANDO ESTE VACIO
   
        res.json({
            ok: true,
            operarioxMes
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg:'Hable con el administrador'
        });
    }

    

}

const getdetOperario = async ( req, res = response ) => {

    const operario = req.params.operario;
    console.log(operario)
    try {
        
        const serOpe = await Servicio.find({operario},{aseguradoraNombre:1, tipoServicio:1,expediente:1,estadoServicio:1, valor:1} );
                                            

        res.json({
            ok: true,
            serOpe
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
        
    }

}
//CONSULTAR DETALLE DE SERVICIO

const getdetServicio = async ( req, res = response ) => {

    const id = req.params._id;
    console.log(id)
    try {
        
        const serOpe = await Servicio.find({id});
                                            

        res.json({
            ok: true,
            serOpe
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
        
    }

}
//REVISAR PARA SACAR LOS SERVICIOS PENDIENTES

const getdetOperarioPendiente = async ( req, res = response ) => {

    const operario = req.params.operario;
    console.log(operario)
    try {
        
        const serOpe = await Servicio.find({$and:[{operario},{estado:'N'}]},{aseguradoraNombre:1, tipoServicio:1,expediente:1,estadoServicio:1, valor:1} );
                                            

        res.json({
            ok: true,
            serOpe
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
        
    }

}

const crearServicio = async ( req, res = response) => {

    const servicio = new Servicio ( req.body );

    const {operario, expediente} = req.body;

    
   
    try {

        const getIdfromOperario = await Operario.findOne({ cedula:operario });
   
        servicio.operario=getIdfromOperario._id;

        servicio.user = req.uid;
        
        if(expediente){
            return res.status(400).json({
                ok: false,
                msg: 'El Expediente ya existe'
            });
        }

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

const getSaldoOperario = async ( req, res = response ) => {

   
    try {
        
        const serOpe = await Servicio.aggregate([

        //  {$project: { operario:1,valor:1,fecha:1}},
                {
                  $group: { _id: "$operario", suma:{$sum:'$valor' },  servicios: { $push: "$$ROOT",}}
                }
              ],)


        res.json({
            ok: true,
            serOpe
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
        
    }

}

const actualizarEstado = async( req, res = response ) => {
    
    const servicioId = req.params.id;
    
    try {

        const servicio = await Servicio.findById( servicioId );

        if ( !servicio ) {
            return res.status(404).json({
                ok: false,
                msg: 'Servicio no existe por ese id'
            });
        }

        const nuevoEstado = req.params.nuevoEstado;
        
        const estadoServicio = {"estadoServicio": nuevoEstado};

        const estadoActualizado = await Servicio.findByIdAndUpdate( servicioId, estadoServicio, { new: true } );

        res.json({
            ok: true,
            servicio: estadoActualizado
        });

        
    } catch (error) {
        console.log(error);
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
    getServiciosDiarios,
    getdetOperarioPendiente,
    getServiciosOpera,
    getdetOperario,
    getdetServicio,
    getSaldoOperario,
    actualizarEstado
}