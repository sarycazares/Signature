const Materia = require("../models/materiaSchema");
//const Carrera = require("../models/carreraSchema");

exports.materia_create = async(req, res) => {
    const{body: materia} = req;

    const materiaDB = new Materia(materia);
    const err = await materiaDB.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
        //guardar
      }
    
      await materiaDB.save().catch((err) => console.log("Algo ha fallado", err));

     /* const carreraDB = Carrera.findOne({ _id: carreraDB.carrera });
      const carreraSaved = Carrera.findOneAndUpdate(
        { _id: carreraDB.carrera },
        { carreras: [...carreraDB.carrera, carreraDB._id] }
      );*/
    
      res.send({
        message: "Materia agregada con exito",
       // data: carreraDB,
      });

};

exports.materia_update = async(req, res) => {
const {body:usuario} = req;

try{
let materiaDB = await Materia.find({_id: materia._id});
if(materiaDB){
    const{nombre, descripcion, carrera, semestre, promedio} = materia;
    const data = await Materia.updateOne(
        {nombre},
        {nombre, descripcion, carrera, semestre, promedio}
    );
    res.send(data);
}
res.send({ msg: "Materia no encontrada" });
}catch(err){
console.log(err);
};
};

exports.materia_delete = async(req, res) => {
    try {
        const {
          params: { id },
        } = req;
    
        console.log(req);
    
        await   Materia.deleteOne({ _id: id });
    
        res.send({ message: "Materia eliminada con exito" });
      } catch (err) {
        console.log(err);
        res.send(err);
      }
};

exports.materia_getById = async(req, res) =>{
    const {
        params: { id },
      } = req;
    
      const data = await materia.findOne({ _id: id }).populate("carrera");
    
      res.send(data);
};

exports.materia_getAll = async(req, res) =>{
    const data = await materia.find().populate("carrera");

    res.send(data);
};