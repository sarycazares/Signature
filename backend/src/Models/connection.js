const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');
const app = express();
const usuarioURL = require('../Routes/usuarioRouter');




mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Signature_PaginaWeb", { useNewUrlParser: true})
.then(() => console.log("Conexion Exitosa"))
.catch(() => {
    console.log("Error al conectar");
    Process.exit();
});

app.use('/app',usuarioURL); //inicializacion de router usuario
app.use(express.json());
//para manejo de instrucciones HTTP