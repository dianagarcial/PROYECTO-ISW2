const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require ('./database/config');

//Se crea el servidor de express
const app = express();

//Se ejecuta la función de conexión a la BD
dbConnection();

//CORS
app.use(cors())

//Directorio

//Lectura y parseo del body
app.use (express.json());

//Rutas
app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/operario', require('./routes/operario'));
app.use('/api/servicio', require('./routes/servicio'));



//Escuchar peticiones
app.listen ( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});