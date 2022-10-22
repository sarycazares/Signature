const Comforo = require('../Models/comentario_foroSchema');
//const Usuario = require('../Models/usuarioSchema');

exports.conentarioForo_create = async(req, res) => {
  
    const{body: comforo} = req;

    const comforoDB = new Comforo(comforo);
    const err = await comforoDB.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
      
      }
    
      /*await comforoDB.save().catch((err) => console.log("Algo ha fallado", err));

      const usuarioDB = Usuario.findOne({ _id: usuarioDB.comres });
      const usuarioSaved = Usuario.findOneAndUpdate(
        { _id: usuarioDB.comres },
        { comR: [...usuarioDB.comres, usuarioDB._id] }
      );*/
    
      res.send({
        message: "Se ha agregado el comentario",
        //data: usuarioDB,
      });

};

exports.comentarioForo_update = async(req, res) => {
const {body:comforo} = req;

try{
let comforoDB = await Comforo.find({_id: comforo._id});

if(comforoDB){
    const{comentario, alumno, fecha, foro} = comforo;
    const data = await Comforo.updateOne(
        {comentario},
        {comentario, alumno, fecha, foro}
    );
    res.send(data);
}
res.send({ msg: "El comentario no ha sido encontrado" });
}catch(err){
console.log(err);
};
};

exports.comentarioForo_delete = async(req, res) => {
    try {
        const {
          params: { id },
        } = req;
    
        console.log(req);
    
        await Comforo.deleteOne({ _id: id });
    
        res.send({ message: "Se ha eliminado el comentario" });
      } catch (err) {
        console.log(err);
        res.send(err);
      }
};

exports.comentarioForo_getById = async(req, res) =>{
    const {
        params: { id },
      } = req;
    
      const data = await Comforo.findOne({ _id: id }).populate("comforo");
    
      res.send(data);
};

exports.comentarioForo_getAll = async(req, res) =>{
    const data = await Comforo.find().populate("comforo");

    res.send(data);
};