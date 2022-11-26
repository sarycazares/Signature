//const Usuario = require("../models/usuarioSchema");
const Resena = require("../models/resenaSchema");

exports.resena_create = async(req, res) => {
    const{body: resena} = req;

    const resenaDB = new Resena(resena);
   /* const err = await resenaDB.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
       const resenaDB = resena.findOne({ _id: resenaDB.resena });
      const resenaSaved = Resena.findOneAndUpdate(
        { _id: resenaDB.resena },
        { resenas: [...resenaDB.resena, resenaDB._id] }
      );
      }*/
    
      await resenaDB.save().catch((err) => console.log("Algo ha fallado", err));

    
    
      res.send({
        message: "La reseña se ha agregado",
        data: resenaDB,
      });

};

exports.resena_update = async(req, res) => {
const {body:resena} = req;

try{
let resenaDB = await Resena.find({_id: resena._id});
if(resenaDB){
    const{materia, maestro, calificacion, semestre, fecha } = usuario;
    const data = await Usuario.updateOne(
        {materia},
        {materia, maestro, calificacion, semestre, fecha}
    );
    res.send(data);
}
res.send({ msg: "Resena no encontrada" });
}catch(err){
console.log(err);
};
};

exports.resena_delete = async(req, res) => {
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

exports.resena_getById = async(req, res) =>{
    const {
        params: { id },
      } = req;
    
      const data = await Usuario.findOne({ _id: id }).populate("carrera");
    
      res.send(data);
};

exports.resena_getAll = async(req, res) =>{
    const data = await Usuario.find().populate("carrera");

    res.send(data);
};