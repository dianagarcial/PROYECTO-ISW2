const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({

    tipoServicio: {
        type: String,
        required: true
    },

    fecha:{ 
        type: Date,
        required: true
    },

    hora: {
        type: String,
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

    licenciaClick:{
        type: String,
        required: true
    },

    contraseñaClick:{
        type: String,
        required: true
    },

    nombreAsegurado: {
        type: String,
        required: true
    },

    placaAsegurado: {
        type: String,
        required: true
    },

    telefonoAsegurado: {
        type: Number,
        required: true
    },

    expediente: {
        type: Number,
        required: true
    },

    aseguradoraNombre: {
        type: String,
        required: true
    },

    estadoServicio: {
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