const express = require('express');
const routerProduc = express.Router();
const productoController = require('../controller/producController');


routerProduc.get('/', productoController.ObtenerTodosLosProductos);
routerProduc.get('/:id',productoController.ObtenerProductoPorId);
routerProduc.post('/',productoController.crearProducto);
routerProduc.put('/:id',productoController.ActualizarProducto);
routerProduc.delete('/:id',productoController.BorrarProducto);



module.exports = routerProduc;

