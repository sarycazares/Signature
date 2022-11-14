const Foro = require('../Models/foroSchema');


exports.foro_create = async(req, res) => {
  
    const{body: foro} = req;

    const foroDB = new Foro(foro);
    const err = await foro.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
      const foroDB = Foro.findOne({ _id: foroDB.foro });
      const foroSaved = Foro.findOneAndUpdate(
        { _id: foroDB.foro },
        { foros: [...foroDB.foro, foroDB._id] }
      );
      }
    
      await foroDB.save().catch((err) => console.log("Algo ha fallado", err));

      
    
      res.send({
        message: "Se ha agregado el foro",
        data: foroDB,
      });

};

exports.comentarioForo_update = async(req, res) => {
const {body:foro} = req;

try{
let foroDB = await Foro.find({_id: foro._id});

if(foroDB){
    const{alumno,publicacion, fecha} = foro;
    const data = await foro.updateOne(
        {alumno},
        {alumno, publicacion, fecha}
    );
    res.send(data);
}
res.send({ msg: "El foro no ha sido encontrado" });
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