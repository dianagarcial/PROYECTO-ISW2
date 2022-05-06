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


//ASEGURADORA SCHEMA
    aseguradoraNombre:{
        type: String,
        required: true
    },

    aseguradoraExpediente:{
        type: Number,
        required: true,
        unique: true
    },

    aseguradoraTecnico: {
        type: String
    },


    //ASEGURADOR SCHEMA
    nombreAsegurado:{
        type: String,
        required: true
    },

    apellidoAsegurado:String,
    
    placaAsegurado:{
        type: String,
        required: true
    },
    telefonoAsegurado:{
        type: Number,
        required: true
    }

   


});

module.exports = model('Servicio', ServicioSchema);