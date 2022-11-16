const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;
require('./src/Models/connection.js');

const usuario_router = require('./src/Routes/usuarioRouter');
const carrera_router = require('./src/Routes/carreraRouter');
const materia_router = require('./src/Routes/materiaRouter');
const facultad_router = require('./src/Routes/facultadRouter');
const universidad_router = require('./src/Routes/universidadRouter');
const resena_router = require('./src/Routes/resenaRouter');
const consejo_router = require('./src/Routes/consejoRouter');
const Foro_router = require('./src/Routes/foroRouter');
const comForo_router = require('./src/Routes/comentario_foroRouter');
const comRes_router = require('./src/Routes/comentario_resenaRouter');
const maestro_router = require('./src/Routes/maestroRouter');

const comrepo_router = require('./src/Routes/reportesRouter');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Api is running");
}); 

app.use('/api',usuario_router);
app.use('/api',materia_router);
app.use('/api',facultad_router);
app.use('/api',universidad_router);
app.use('/api',resena_router);
app.use('/api',consejo_router);
app.use('/api',Foro_router);
app.use('/api',comForo_router);
app.use('/api',comRes_router);
app.use('/api',maestro_router);

app.use('/api',comrepo_router);

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
})

