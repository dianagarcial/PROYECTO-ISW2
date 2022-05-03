const { Schema, model } = require('mongoose');

const ServicioSchema = Schema({

    tipo_servicio: {
        type: String,
        required: true
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

    correo_cuenta:{
        type: String,

    },

    contraseña:{
        type: String
    },

    operario:{
        type: Schema.Types.ObjectId,
        ref: 'Operario',
        required: true
    },

    aseguradora:{
        type: Schema.Types.ObjectId,
        ref: 'Aseguradora',
        required: true
    },

    asegurado:{
        type: Schema.Types.ObjectId,
        ref: 'Asegurado'
        // required: true
    }
    //agregar la referencia al licencia click, el asegurado


});

module.exports = model('Servicio', ServicioSchema);