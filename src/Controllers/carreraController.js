const Universidad = require(".../models/universidadSchema");
const Facultad = require(".../models/facultadSchema");

exports.carrera_create = async(req, res) => {
    const{body: carrera} = req;

    const carreraDB = new Carrera(carrera);
    const err = await CarreraDB.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
        //guardar
      }
    
      await carreraDB.save().catch((err) => console.log("Algo ha fallado", err));

      const facultadDB = Facultad.findOne({ _id: usuarioDB.facultad });
      const facultadSaved = Facultad.findOneAndUpdate(
        { _id: FacultadDB.facultad },
        { facu: [...facultadDB.facultad, facultadDB._id] }
      );
    
      res.send({
        message: "Se ha agregado la carrera exitosamente",
        data: facultadDB,
      });

};

exports.carrera_update = async(req, res) => {
const {body:carrera} = req;

try{
let carreraDB = await Carrera.find({_id: carrera._id});
if(carreraDB){
    const{nombre, facultad} = carrera;
    const data = await Carrera.updateOne(
        {nombre},
        {nombre, facultad}
    );
    res.send(data);
}
res.send({ msg: "Carrera no encontrada" });
}catch(err){
console.log(err);
};
};

exports.carrera_delete = async(req, res) => {
    try {
        const {
          params: { id },
        } = req;
    
        console.log(req);
    
        await Carrera.deleteOne({ _id: id });

    
        
        res.send({ message: "Carrera eliminada con exito" });
      } catch (err) {
        console.log(err);
        res.send(err);
      }
};

exports.carrera_getById = async(req, res) =>{
    const {
        params: { id },
      } = req;
    
      const data = await carrera.findOne({ _id: id }).populate("facultad");
    
      res.send(data);
};

exports.carrera_getAll = async(req, res) =>{
    const data = await carrera.find().populate("facultad");

    res.send(data);
};