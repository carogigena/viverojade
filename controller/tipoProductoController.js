const db = require('../db/db');

const ObtenerTipoProductos = (req,res) =>{
    const sql = 'SELECT * FROM tipoproducto';
    db.query(sql, (err,results) => 
    {
        if(err)
            throw err;

        res.json(results);
    });
}

const ObtenerProductosporTipo = (req,res) =>{
    const {id}= req.params;
    const sql = 'SELECT * FROM productos where tipoproducto_idtipoproductos = ?';
    db.query(sql, [id], (err,results)=>
    {

        if(err)
            throw err;

        res.json(results);
    });
}

module.exports = 
{
    ObtenerProductosporTipo,
    ObtenerTipoProductos
}