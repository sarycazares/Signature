const Usuario = require('../Models/usuarioSchema');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var session = require('express-session');
//const usar = require('../../../signature/src/components/home/home');


const { request } = require('express');

exports.usuario_create = async(req, res) => {
  console.log("Entra a creacion");
    const{body: usuario} = req;

    /*const usuarioDB = new Usuario({ //se ingresa la informacion despues de mandar orden post en el router
      matricula:req.body.matricula,
      usuario:req.body.usuario,
      facultad:req.body.facultad,
      carrera:req.body.carrera,
      semestre:req.body.semestre,
      contrasena:req.body.contrasena
    })*/
    const usuarioDB = new Usuario(usuario);
    console.log("sale de compilacion")
    /*const err = await usuarioDB.validate();

    if(err.errors) {
        console.log(err);
       res.send(err);
      }*/

      await usuarioDB.save().catch((err) => console.log("Algo ha fallado", err)); //se guarda la info y se validan posibles erroes
      
      /*const carreraDB = Carrera.findOne({ _id: usuarioDB.carrera });
      const carreraSaved = Carrera.findOneAndUpdate(
        { _id: carreraDB.carrera },
        { usuarios: [...carreraDB.carrera, carreraDB._id] }
      );*/
      res.send({
        message: "Estudiante creado con exito",
        data: usuarioDB,
      });
};

exports.usuario_update = async(req, res) => {
const {body:usuario} = req;

try{
let usuarioDB = await Usuario.find({_id: usuario._id});
if(usuarioDB){
    const{matricula, facultad, carrera, semestre, contraseña } = usuario;
    const data = await Usuario.updateOne(
        {matricula},
        {matricula, facultad, carrera, semestre, contraseña}
    );
    res.send(data);
}
res.send({ msg: "Estudiante no encontrado" });
}catch(err){
console.log(err);
};
};

exports.usuario_delete = async(req, res) => {
    try {
        const {
          params: { id },
        } = req;
    
        console.log(req);
    
        await Usuario.deleteOne({ _id: id });
    
        res.send({ message: "Estudiante eliminado con exito" });
      } catch (err) {
        console.log(err);
        res.send(err);
      }
};

exports.usuario_getById = async(req, res) =>{
    const {
        params: { id },
      } = req;
    
      const data = await Usuario.findOne({ _id: id }).populate("usuario");
    
      res.send(data);
};

/*exports.iniciar_sesion = (req, res) =>{
 
   Usuario.findOne({
    usuario: req.body.usuario,
   })
   .populate('Usuario')
   .exec((err, usuario) => {
    if(err){
    res.status(500).send({message:err});
    return;
   }
   if(!usuario){
    return res.status(404).send({ message: "Usuario no encontrado." });
   }


   var contraCorrecta = bcrypt.compareSync(
    req.body.contraseña,
    usuario.contraseña
  );

  if (!contraCorrecta) {
    return res.status(401).send({ message: "Contraseña invalida" });
  }

  req.session.usuario = usuario;

 res.status(200).send({
    id: usuario._id,
    usuario: usuario.usuario,
    contraseña: usuario.contraseña,
 });
});
}; 
*/

exports.usuario_login = async (req, res) =>{
  const { body } = req;
  // Método optimizado para buscar por ids.
  //const data = await Usuario.find({}); // Encuentra el primer registro que coincide con la condición. 
  const data = await Usuario.findOne({usuario: body.usuario, contraseña: body.contraseña}); // Es lo mismo que hacer lo de arriba
 
  if(data){
      //res.sendFile('../../../signature/src/components/home/home', {root: __dirname});
      //location.assign('/home');
       console.log("Entro al metodo y encontro");
      // res.sendStatus(200);
       res.send(data);
       
       
  }else{
      console.log("No se encontro nada");
      console.log("Entro al metodo y no encontro");
  }
}

exports.cerrar_sesion = async(req, res)=>{
  try{
    req.session = null;
      return res.status(200).send({message:"Te has deslogeado"});
  }catch(err){
    this.next(err);
  }
  
}

exports.usuario_getAll = async(req, res) =>{
    const data = await Usuario.find().populate("carrera");

    res.send(data);
};


