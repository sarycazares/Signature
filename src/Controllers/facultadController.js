const Facultad = require("../models/facultadSchema");
//const Carrera = require("../models/carreraSchema");

exports.facultad_create = async(req, res) => {
    const{body: facultad} = req;

    const facultadDB = new Usuario(facultad);
    const err = await facultadDB.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
        //guardar
      }
    
      await facultadDB.save().catch((err) => console.log("Algo ha fallado", err));

      const universidadDB = Universidad.findOne({ _id: UniversidadDB.universidad });
      const universidadSaved = Universidad.findOneAndUpdate(
        { _id: universidadDB.universidad },
        { uni: [...universidadDB.universidad, universidadDB._id] }
      );
    
      res.send({
        message: "Estudiante creado con exito",
        data: universidadDB,
      });

};

exports.facultad_update = async(req, res) => {
const {body:facultad} = req;

try{
let facultadDB = await Facultad.find({_id: facultad._id});
if(facultadDB){
    const{nombre, siglas, universidad, ciudad} = facultad;
    const data = await Facultad.updateOne(
        {nombre},
        {nombre, siglas, universidad, ciudad}
    );
    res.send(data);
}
res.send({ msg: "Facultad no encontrada" });
}catch(err){
console.log(err);
};
};

exports.facultad_delete = async(req, res) => {
    try {
        const {
          params: { id },
        } = req;
    
        console.log(req);
    
        await Facultad.deleteOne({ _id: id });
    
        res.send({ message: "Facultad eliminada con exito" });
      } catch (err) {
        console.log(err);
        res.send(err);
      }
};

exports.facultad_getById = async(req, res) =>{
    const {
        params: { id },
      } = req;
    
      const data = await Facultad.findOne({ _id: id }).populate("universidad");
    
      res.send(data);
};

exports.facultad_getAll = async(req, res) =>{
    const data = await Facultad.find().populate("universidad");

    res.send(data);
};