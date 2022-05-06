const { Schema, model } = require('mongoose');

const OperarioSchema = Schema({
    
    nombreUsuario:{
        type: String,
        required: true
    },

    contraseña:{
        type: String,
        required: true
    },

    cedula:{
        type: Number,
        required: true,
        unique: true
    },

    rh:{
        type: String,
        required: true
    },

    edad:{
        type: Number,
        required: true
    },

    nombreCompleto:{
        type: String,
        required: true
    },

    telefono:{
        type: Number,
        required: true
    },

    estado:{
        type: String,
        required: true
    }

});

module.exports = model('Operario', OperarioSchema);