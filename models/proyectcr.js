
const { Schema, model } = require('mongoose');

const ProyectcrSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio']
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El nombre del proyecto es obligatorio'],
        unique: true
    },
    fechacierre: {
        type: Date, default: Date.now 
    },
    pais: {
        type: String
    }
});



module.exports = model( 'Proyectcr', ProyectcrSchema );