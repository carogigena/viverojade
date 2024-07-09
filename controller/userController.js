const db = require('../db/db');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

const ObtenerTodosLosUsuarios = (req,res) => {
    const sql = 'SELECT * FROM usuarios';

    db.query(sql, (err,results) => 
    {
        if(err)
            throw err;

        res.json(results);
    });
}

const ObtenerUsuarioPorId = (req,res) => 
{
    const {id} = req.params;
    const sql = 'SELECT * FROM usuarios WHERE idusuario = ?'

   db.query(sql, [id] ,(err, result) => 
   {
        if(err) throw err;

        res.json(result);
   });

}

const crearUsuario = (req,res) => 
{
    const {nombre,apellido,mail,usuario,password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8); 

    const sql = 'INSERT INTO usuarios (nombres,apellido,email, usuario, password) VALUES (?,?,?,?,?)';

    db.query(sql,[nombre,apellido,mail,usuario,{password:hashedPassword}], (err,result) => 
    {
        if(err) throw err;

        res.json(
            {
                mensaje : "Usuario Creado con EXITO",
                idUsuario : result.insertId
            });

    });
 // Genera un token JWT para el nuevo usuario
    const token = jwt.sign({ id: idUsuario.id }, config.secretKey, { expiresIn: config.tokenExpiresIn });
     // Envía el token como respuesta al cliente
    res.status(201).send({ auth: true, token }); 

}



// Función para iniciar sesión de un usuario
 const login = (req, res) => {
    const { usuario, password } = req.body; 
    
    const user = users.find(u => u.usuario === usuario); 
    if (!user) return res.status(404).send('Usuario no encontrado'); 
    
    const passwordIsValid = bcrypt.compareSync(password, usuario.password); 
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null }); 
    
    const token = jwt.sign({ id: user.id }, config.secretKey, { expiresIn: config.tokenExpiresIn }); 
    res.status(200).send({ auth: true, token }); 
 };
 




const ActualizarUsuario = (req,res) => 
{
    const {id} = req.params;
    const {nombre,apellido,mail} = req.body;

    const sql = 'UPDATE usuarios SET nombres = ?, apellido = ? , email = ? WHERE id = ?'

    db.query(sql, [nombre,apellido,mail,id], (err,result) => 
    {
        if(err) throw err;

        res.json({
            mensaje : "Usuario EDITADO"
        })
    });
}



const BorrarUsuario = (req,res) => 
{
    const {id} = req.params;

    const sql = 'DELETE FROM usuarios WHERE id = ?';

    db.query(sql,[id],(err,result) => 
    {
        if(err) throw err;

        res.json(
            {
                mensaje : "usuario ELIMINADO con EXITO"
            })

    });
}


module.exports = 
{
    ObtenerTodosLosUsuarios,
    ObtenerUsuarioPorId,
    crearUsuario,
    ActualizarUsuario,
    BorrarUsuario, 
    login
}