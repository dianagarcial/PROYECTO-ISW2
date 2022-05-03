const { response } = require('express');
const Aseguradora = require('../models/Aseguradora');


const getAseguradora = async( req, res = response ) => {

    const aseguradoras = await Aseguradora.find();

    res.json({
        ok: true,
        aseguradoras
    });

}

const crearAseguradora = async ( req, res = response) => {

    const aseguradora = new Aseguradora ( req.body );
    const { expediente } = req.body;


    try {

        const expedienteExite = await Aseguradora.findOne({ expediente });
        if (expedienteExite) {

            return res.status(400).json({
                of: false,
                msg: 'El expediente ya existe'
            });

        }

        aseguradora.user = req.uid;

        const aseguradoraGuardada = await aseguradora.save();

        res.json({
            ok: true,
            aseguradora: aseguradoraGuardada
        });
        
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Contacte con el administrador'
        });
        
    }

}

module.exports = {
    getAseguradora,
    crearAseguradora
}