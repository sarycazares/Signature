const Consejo = require('../Models/consejoSchema');

exports.consejo_create = async(req, res) => {
  
    const{body: consejo} = req;

    const consejoDB = new Consejo(consejo);
    const err = await consejoDB.validate();

    if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
        const consejoDB = Consejo.findOne({ _id: consejoDB.consejo });
        const consejoSaved = Consejo.findOneAndUpdate(
        { _id: consejoDB.consejo },
        { cons: [...consejoDB.consejo, consejoDB._id] }
      );
      }
    
      await consejoDB.save().catch((err) => console.log("Algo ha fallado", err));

      
    
      res.send({
        message: "Publicacion realizada con exito",
        data: consejoDB,
      });
s
};

exports.consejo_update = async(req, res) => {
const {body:consejo} = req;

try{
let consejoDB = await Consejo.find({_id: consejo._id});
if(consejoDB){
    const{consejo,alumno,materia,fecha} = usuario;
    const data = await Usuario.updateOne(
        {consejo},
        {consejo, alumno, materia, fecha}
    );
    res.send(data);
}
res.send({ msg: "La publicacion no fue encontrada" });
}catch(err){
console.log(err);
};
};

exports.consejo_delete = async(req, res) => {
    try {
        const {
          params: { id },
        } = req;
    
        console.log(req);
    
        await Consejo.deleteOne({ _id: id });
    
        res.send({ message: "Se ha eliminado la publicacion" });
      } catch (err) {
        console.log(err);
        res.send(err);
      }
};

exports.consejo_getById = async(req, res) =>{
    const {
        params: { id },
      } = req;
    
      const data = await Consejo.findOne({ _id: id }).populate("consejo");
    
      res.send(data);
};

exports.consejo_getAll = async(req, res) =>{
    const data = await consejo.find().populate("consejo");

    res.send(data);
};