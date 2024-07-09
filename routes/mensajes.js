const express = require('express');
const routerMensajes = express.Router();
const mensajesController = require('../controller/mensajesController');


routerMensajes.get('/', mensajesController.ObtenerTodosLosMensajes);
//routerMensajes.get('/:id',mensajesController.ObtenerProductoPorId);
routerMensajes.post('/',mensajesController.crearMensaje);
//routerMensajes.put('/:id',mensajesController.ActualizarMensaje);
//routerMensajes.delete('/:id',mensajesController.BorrarMensaje);



module.exports = routerMensajes;

