import {formatearFecha, fechaCorta, fechaLarga } from './utils/formatearFecha.js';

const fecha = new Date();


console.log(formatearFecha(fecha));
console.log(fechaLarga(fecha));
console.log(fechaCorta(fecha));



