const mongoose = require('mongoose');

const dbConnection = () => {

    try {
        
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        });

        console.log('DB ONLINE');

    } catch (error) {
        console.log(error);
        throw new Error('Error en el momento de iniciar la BD');
    }

}

module.exports = {
    dbConnection
}