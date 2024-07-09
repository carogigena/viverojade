const express = require("express");
const morgan = require('morgan');
const database = require("./db/db");
const cors = require('cors');
const path = require('path'); 


const app = express();

const usuariosRouter = require('./routes/usuarios');
const productosRouter = require('./routes/productos');
const tipoproductosRouter = require('./routes/tipoproductos');
const mensajesRouter = require('./routes/mensajes');

app.use(express.static('public'));
app.use(express.json());//5501
app.use(cors({origin:'*',
    methods: ["GET", "POST", "PUT", "DELETE"]
    }
));
app.use('/usuarios',usuariosRouter);
app.use('/productos',productosRouter);
app.use('/tipoproductos',tipoproductosRouter);
app.use('/mensajes',mensajesRouter);

const PORT = process.env.PORT || 3000;
const HOST = 'jcgigena.alwaysdata.net';// process.env.HOST || 'http://localhost';

app.listen(PORT, ()=> console.log(`${HOST}:${PORT}`));

app.get('/', (req,res) => 
    {
       res.sendFile(path.join(__dirname, "../public/index.html"));
        //res.send(path.join(__dirname, "../frontend/index.html")+`HOLA DESDE EL HOST ${HOST}, PUERTO:${PORT}`);
    });
