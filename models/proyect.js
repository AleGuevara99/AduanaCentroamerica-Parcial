
const { Schema, model } = require('mongoose');

const ProyectSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio']
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El nombre del proyecto es obligatorio'],
        unique: true
    },
    fecha: {
        type: Date, default: Date.now 
    },
    monto: {
        type: Number
    },
    pais: {
        type: String
    }
});

module.exports = model( 'Proyect', ProyectSchema );