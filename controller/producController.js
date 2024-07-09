const db = require('../db/db');

const ObtenerTodosLosProductos = (req,res) => {
    const sql = 'SELECT * FROM productos';
    db.query(sql, (err,results) => 
    {
        if(err)
            throw err;

        res.json(results);
    });
}

const ObtenerProductoPorId = (req,res) => 
{
    const {id} = req.params;
    const sql = 'SELECT * FROM productos WHERE idproducto = ?'

   db.query(sql, [id] ,(err, result) => 
   {
        if(err) throw err;

        res.json(result);
   });

}

const crearProducto = (req,res) => 
{
    const {descripcion,nombre,precio,stock,link_img,tipoproducto_idtipoproducto} = req.body;
    
    const sql = 'INSERT INTO productos (nombre,descripcion,precio,stock,link_img,tipoproducto_idtipoproducto) VALUES (?,?,?,?,?,?)';

    db.query(sql,[nombre,descripcion,precio,stock,link_img,tipoproducto_idtipoproducto], (err,result) => 
    {
        if(err) throw err;

        res.json(
            {
                mensaje : "Producto Creado con EXITO",
                idProducto : result.insertId
            });

    });


}

const ActualizarProducto = (req,res) => 
{
    const {id} = req.params;
    const {descripcion,nombre,precio,stock,link_img} = req.body;

    const sql = 'UPDATE productos SET nombre = ?, descripcion = ? , precio = ? , stock=? , link_img=?  WHERE idproducto = ?'
     db.query(sql, [nombre,descripcion,precio,stock,link_img,id], (err,result) => 
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
    console.log(id);
    const sql = 'DELETE FROM Productos WHERE idproducto = ?';

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

module.exports = 
{
    ObtenerTodosLosProductos,
    ObtenerProductoPorId,
    crearProducto,
    ActualizarProducto,
    BorrarProducto,
    ObtenerProductosporTipo
}
