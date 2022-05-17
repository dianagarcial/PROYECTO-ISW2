const { response} = require('express');
const bcrypt = require('bcryptjs');
const Operario = require('../models/Operario');
const { generarJWT } = require('../helpers/jwt');

const getOperarios = async (req, res = Response ) =>{

    const operarios = await Operario.find();
                                   
    res.json({
        ok:true,
        operarios
    });

}

const getOperarioCedula = async (req, res = Response) => {

    const {cedula} = req.body;

    const opeCedula = await Operario.findOne({ cedula });

    if(!opeCedula){
        return res.status(400).json({
            ok: false,
            msg: 'El operario por esa cedula no existe'
        });
    }

    res.json({
        ok:true,
        opeCedula
    });

}



const getOperarioCedulaparam = async (req, res = response ) => {

    const _id = req.params._id;
    

    const opeId = await Operario.findOne({_id });

    res.json({
        ok:true,
        opeId
    });

}

const getOperarioUsuarioparam = async (req, res = response ) => {

    const  nombre_usuario = req.params.nombre_usuario;

    const opeNombre = await Operario.findOne({ nombre_usuario });

    res.json({
        ok:true,
        opeNombre
    });

}

const getOperarioNombreparam = async (req, res = response ) => {

    const  nombre_completo = req.params.nombre_completo;

    const opeNombre = await Operario.findOne({ nombre_completo },{cedula:1});

    res.json({
        ok:true,
        opeNombre
    });

}

const getOperarioId = async (req, res = Response) => {

    const {_id} = req.body;

    const opeId = await Operario.findOne({_id });


    res.json({
        ok:true,
        opeId
    });

}

const getOperarioNombre = async (req, res) => {

    const {nombre} = req.body;

    const respuesta = await Operario.findOne({ nombre }, {cedula:1,_id:1});


    res.json({        
        respuesta
    });

}

const crearOperario = async ( req, res = response ) => {

    const { nombreUsuario, contraseña, cedula, 
        rh, edad, nombreCompleto, telefono, estado } = req.body;    

    try {
        let operario = await Operario.findOne({cedula});

        if( operario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El operario ya existe'
            });
        }

        operario = new Operario( req.body );

        const salt = bcrypt.genSaltSync();
        operario.contraseña = bcrypt.hashSync( contraseña, salt );

        await operario.save();

        const token = await generarJWT( operario.id, operario.name );
    
        res.status(201).json({
            ok: true,
            uid: operario.id,
            nombre: operario.nombreUsuario,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

const loginOperario = async(req, res = response) => {

    const { nombre_usuario, contraseña } = req.body;

    try {
        const operario = await Operario.findOne({ nombre_usuario });

        if(!operario) {
            return res.json({
                ok: false,
                msg: 'El email ingresado no se encuentra registrado'
            });
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( contraseña, operario.contraseña );

        if ( !validPassword ) {
            return res.json({
                ok: false,
                msg: 'Contraseña incorrecta'
            });
        }

        // Generar JWT
        const token = await generarJWT( operario.id, operario.nombre_usuario );

        res.json({
            ok: true,
            uid: operario.id,
            name: operario.nombre_usuario,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });    
    }

}

const revalidarToken = async (req, res = response ) => {

    const { uid, name } = req;

    // Generar JWT
    const token = await generarJWT( uid, name );

    res.json({
        ok: true,
        token
    })
}

const actualizarEstadoOpe = async( req, res = response ) => {
    
    const operarioId = req.params.id;
    

    try {

        const operario = await Operario.findById( operarioId );

        if ( !operarioId ) {
            return res.status(404).json({
                ok: false,
                msg: 'Operario no existe por ese id'
            });
        }


        const nuevoEstado = req.params.nuevoEstado;

        const estadoDia = {"estado": nuevoEstado}

        const estadoActualizado = await Operario.findByIdAndUpdate( operarioId, estadoDia, { new: true } );

        res.json({
            ok: true,
            estado: estadoActualizado
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
    getOperarios,
    getOperarioCedula,
    getOperarioCedulaparam,
    getOperarioUsuarioparam,
    getOperarioNombreparam,
    getOperarioId,
    crearOperario,
    loginOperario,
    revalidarToken,
    getOperarioNombre,
    actualizarEstadoOpe
}