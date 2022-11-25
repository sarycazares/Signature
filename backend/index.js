const express = require('express');
const bodyParser = require('body-parser')
const app = express();
//import axios from 'axios';
const axios = require('axios');
const router = express.Router();
const port = 3001;
const cors = require('cors');
require('./src/Models/connection.js');
app.use(cors()); 

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


const usuario_router = require('./src/Routes/usuarioRouter');
const carrera_router = require('./src/Routes/carreraRouter');
const materia_router = require('./src/Routes/materiaRouter');
const facultad_router = require('./src/Routes/facultadRouter');

const resena_router = require('./src/Routes/resenaRouter');
const consejo_router = require('./src/Routes/consejoRouter');

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
app.use('/api',resena_router);
app.use('/api',consejo_router);
app.use('/api',comForo_router);
app.use('/api',comRes_router);
app.use('/api',maestro_router);
app.use('/api',comrepo_router);
app.use(cors(corsOptions));
//app.use(session({secret: '13245', resave:true, saveUninitializaed: true}));

//app.use(cors({origin: 'http://localhost:3001/api/usuario'}));

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//add router in express
app.use("/api", router);

//POST route
router.post("/token", async (req, res) => {
//Destructuring response token from request body
console.log('llega aqui al back');
    const {token} = req.body;

    console.log('llega aqui al back');
//sends secret key and response token to google
    await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LcbXRojAAAAABf80rZplZkBO92ig5T6AIc-P-ly&response=${token}`
      );

//check response status and send back to the client-side
      if (res.status(200)) {
        res.send("Human 👨 👩");
    }else{
      res.send("Robot 🤖");
    }
})



