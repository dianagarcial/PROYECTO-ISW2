const { response, json } = require('express');
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
                                            

    res.json({
        ok:true,
        opeCedula
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

const revalidarToken = async (req, res = response ) => {

    const { uid, name } = req;

    // Generar JWT
    const token = await generarJWT( uid, name );

    res.json({
        ok: true,
        token
    })
}

module.exports = {
    getOperarios,
    getOperarioCedula,
    crearOperario,
    revalidarToken
}