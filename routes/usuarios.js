const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware'); 

router.get('/', userController.ObtenerTodosLosUsuarios);
router.get('/:id',userController.ObtenerUsuarioPorId);
router.post('/',userController.crearUsuario);
router.put('/:id',userController.ActualizarUsuario);
router.delete('/:id',userController.BorrarUsuario);
// Ruta para iniciar sesión de un usuario
router.post('/login', userController.login);



module.exports = router;

