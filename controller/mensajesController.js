const db = require('../db/db');



const ObtenerTodosLosMensajes = (req,res) => {
    const sql = 'SELECT * FROM mensajes';
    db.query(sql, (err,results) => 
    {
        if(err)
            throw err;

        res.json(results);
    });
}

const crearMensaje = (req,res) => 
    {
        const {mensaje,fecha,asunto,usuarios_idusuarios} = req.body;
    
        const sql = 'INSERT INTO productos (mensaje,fecha,asunto,usuarios_idusuarios) VALUES (?,?,?)';
    
        db.query(sql,[mensaje,fecha,asunto,usuarios_idusuarios], (err,result) => 
        {
            if(err) throw err;
    
            res.json(
                {
                    mensaje : "mesaje Creado con EXITO",
                    idmensaje : result.insertId
                });
    
        });
    
    
    }
/*const ObtenerProductoPorId = (req,res) => 
{
    const {id} = req.params;
    const sql = 'SELECT * FROM productos WHERE idproducto = ?'

   db.query(sql, [id] ,(err, result) => 
   {
        if(err) throw err;

        res.json(result);
   });

}



const ActualizarProducto = (req,res) => 
{
    console.log(req.params);
    const {id} = req.params;
    const {nombre,descripcion,precio,tipoproducto_idtipoproducto} = req.body;

    const sql = 'UPDATE productos SET nombre = ?, descripcion = ? , precio = ? , tipoproducto_idtipoproducto =? WHERE id = ?'

    db.query(sql, [nombre,descripcion,precio,tipoproducto_idtipoproducto,id], (err,result) => 
    {
        if(err) throw err;

        res.json({
            mensaje : "Producto EDITADO"
        })
    });
}



const BorrarProducto = (req,res) => 
{
    const {id} = req.params;

    const sql = 'DELETE FROM Productos WHERE id = ?';

    db.query(sql,[id],(err,result) => 
    {
        if(err) throw err;

        res.json(
            {
                mensaje : "producto ELIMINADO con EXITO"
            })

    });
}

const ObtenerProductosporTipo = (req,res) =>{
    const {id}= req.params;
    const sql = 'SELECT * FROM productos where tipoproducto_idtipoproductos = ?';
    console.log(sql);
    db.query(sql, [id], (err,result)=>
    {

        if(err)
            throw err;

        res.json(results);
    })
}
*/
module.exports = 
{
    ObtenerTodosLosMensajes,
    crearMensaje
}