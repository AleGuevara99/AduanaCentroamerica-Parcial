const express = require('express')
const cors = require('cors')

const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app = express()
        this.PORT = process.env.PORT;
        this.proyectPath = '/api/proyect';
        //cr
        this.proyectcrPath = '/api/proyectcr';

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares()
        //rutas de ingreso al server
        this.routes()
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(cors())
        // Lectura y parseo del body
        this.app.use( express.json() );
    }

    routes() {
        this.app.use( this.proyectPath, require('../routes/proyect'));
        //cr
        this.app.use( this.proyectcrPath, require('../routes/proyectcr'));

    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Example app listening on port ${this.PORT}`)
          })
    }

}

module.exports = Server;