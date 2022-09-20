const Maestro = require("../Models/maestroSchema");
const Materia = require("../Models/materiaSchema");


exports.maestro_create = async(req, res) => {
    const{body: maestro} = req;

    const maestroDB = new Maestro(maestro);
    const err = await maestroDB.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
        //guardar
      }
    
      await maestroDB.save().catch((err) => console.log("Algo ha fallado", err));

      const materiaDB = Materia.findOne({ _id: materiaDB.carrera });
      const materiaSaved = Materia.findOneAndUpdate(
        { _id: materiaDB.materia },
        { materias: [...materiaDB.carrera, materiaDB._id] }
      );
    
      res.send({
        message: "Maestro creado con exito",
        data: carreraDB,
      });

};

exports.maestro_update = async(req, res) => {
const {body:materia} = req;

try{
let maestroDB = await Maestro.find({_id: maestro._id});
if(maestroDB){
    const{nombre, cedula, materia} = usuario;
    const data = await Maestro.updateOne(
        {nombre},
        {nombre, cedula, materia}
    );
    res.send(data);
}
res.send({ msg: "Maestro no encontrado" });
}catch(err){
console.log(err);
};
};

exports.maestro_delete = async(req, res) => {
    try {
        const {
          params: { id },
        } = req;
    
        console.log(req);
    
        await Maestro.deleteOne({ _id: id });
    
        res.send({ message: "Maestro eliminado con exito" });
      } catch (err) {
        console.log(err);
        res.send(err);
      }
};

exports.maestro_getById = async(req, res) =>{
    const {
        params: { id },
      } = req;
    
      const data = await Maestro.findOne({ _id: id }).populate("materia");
    
      res.send(data);
};

exports.maestro_getAll = async(req, res) =>{
    const data = await Maestro.find().populate("materia");

    res.send(data);
};
