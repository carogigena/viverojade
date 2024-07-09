const express = require('express');
const routerTipoProduc = express.Router();
const tipoProductoController = require('../controller/tipoProductoController');


routerTipoProduc.get('/', tipoProductoController.ObtenerTipoProductos);
routerTipoProduc.get('/:id',tipoProductoController.ObtenerProductosporTipo);


module.exports = routerTipoProduc;