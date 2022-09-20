const Comres = require('../Models/comentario_resenaSchema');
//const Usuario = require('../Models/usuarioSchema');

exports.conentarioResena_create = async(req, res) => {
  
    const{body: comres} = req;

    const comresDB = new Comres(comres);
    const err = await comresDB.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
      
      }
    
      await comresoDB.save().catch((err) => console.log("Algo ha fallado", err));

      const usuarioDB = Usuario.findOne({ _id: usuarioDB.comres });
      const usuarioSaved = Usuario.findOneAndUpdate(
        { _id: usuarioDB.comres },
        { comR: [...usuarioDB.comres, usuarioDB._id] }
      );
    
      res.send({
        message: "Se ha agregado el comentario",
        data: usuarioDB,
      });

};

exports.comentarioResena_update = async(req, res) => {
const {body:comres} = req;

try{
let comresDB = await Comres.find({_id: comres._id});

if(comresDB){
    const{comentario, alumno, resena, calificacion, fecha} = comres;
    const data = await Comres.updateOne(
        {comentario},
        {comentario, alumno, resena, calificacion, fecha}
    );
    res.send(data);
}
res.send({ msg: "El comentario no ha sido encontrado" });
}catch(err){
console.log(err);
};
};

exports.comentarioResena_delete = async(req, res) => {
    try {
        const {
          params: { id },
        } = req;
    
        console.log(req);
    
        await Comres.deleteOne({ _id: id });
    
        res.send({ message: "Seha eliminado el comentario" });
      } catch (err) {
        console.log(err);
        res.send(err);
      }
};

exports.comentarioResena_getById = async(req, res) =>{
    const {
        params: { id },
      } = req;
    
      const data = await Comres.findOne({ _id: id }).populate("comres");
    
      res.send(data);
};

exports.comentarioResena_getAll = async(req, res) =>{
    const data = await Comres.find().populate("comres");

    res.send(data);
};