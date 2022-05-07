const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({

    tipoServicio: {
        type: String,
        required: true
    },

    fecha:{ 
        type: Date
    },

    hora: {
        type: Date,
        required: true
    },

    origen: {
        type: String,
        required: true
    },

    destino: {
        type: String,
        required: true
    },

    valor:{
        type: Number,
        required: true
    },

    correoCuenta:{
        type: String,

    },

    contraseña:{
        type: String
    },

    nombreAsegurado: {
        type: String,
        required: true
    },

    apellidoAsegurado: {
        type: String
    },

    placaAsegurado: {
        type: String,
        required: true
    },

    telefonoAsegurado: {
        type: Number,
        required: true
    },

    expendiente: {
        type: String,
        
    },

    aseguradoraNombre: {
        type: String,
        required: true
    },

    aseguradoraTecnico: {
        type: String,
        required: true
    },

    operario:{
        type: Schema.Types.ObjectId,
        ref: 'Operario',
        required: true
    }

});

module.exports = model('Servicio', ServicioSchema);