const Usuario = require('../Models/usuarioSchema');
const Carrera = require('../Models/carreraSchema');

exports.usuario_create = async(req, res) => {
  console.log("Entra");
    const{body: usuario} = req;

    const usuarioDB = new Usuario(usuario);
    const err = await usuarioDB.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
        //guardar
      }
    
      await usuarioDB.save().catch((err) => console.log("Algo ha fallado", err));

      const carreraDB = Carrera.findOne({ _id: usuarioDB.carrera });
      const carreraSaved = Carrera.findOneAndUpdate(
        { _id: carreraDB.carrera },
        { usuarios: [...carreraDB.carrera, carreraDB._id] }
      );
    
      res.send({
        message: "Estudiante creado con exito",
        data: carreraDB,
      });

};

exports.usuario_update = async(req, res) => {
const {body:usuario} = req;

try{
let usuarioDB = await Usuario.find({_id: usuario._id});
if(studentDB){
    const{matricula, facultad, carrera, semestre, contrasena } = usuario;
    const data = await Usuario.updateOne(
        {matricula},
        {matricula, facultad, carrera, semestre, constrasena}
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
    
      const data = await Usuario.findOne({ _id: id }).populate("carrera");
    
      res.send(data);
};

exports.usuario_getAll = async(req, res) =>{
    const data = await Usuario.find().populate("carrera");

    res.send(data);
};