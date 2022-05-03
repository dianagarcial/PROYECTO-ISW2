const { Schema, model } = require('mongoose');

const AseguradoSchema = Schema({

            nombre:{
                type: String,
                required: true
            },

            apellido:String,
            
            placa:{
                type: String,
                required: true
            },

            telefono:{
                type: Integer,
                required: true
            }


});

module.exports = model('Asegurado', AseguradoSchema);