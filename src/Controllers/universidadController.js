const Universidad = require(".../models/universidadSchema");

extend.universidad_create = async(req, res) =>{
const{body:universidad} = req;

const universidadDB = new Universidad(universidad);
const err = await universidadDB.validate();

if(err.errors) {
    console.log(err);
    res.send(err);
  }
  else {
    //guardar
  }

  await universidadDB.save().catch((err) => console.log("Algo ha fallado", err));


  res.send({
    message: "Universidad creada con exito",
    //data: universidadDB,
  });

};

exports.universidad_update = async(req, res) => {
    const {body:universidad} = req;
    
    try{
    let universidadDB = await Universidad.find({_id: universidad._id});
    if(universidadDB){
        const{nombre, siglas, estado} = universidad;
        const data = await Universidad.updateOne(
            {nombre},
            {nombre, siglas, estado}
        );
        res.send(data);
    }
    res.send({ msg: "Universidad no encontrada" });
    }catch(err){
    console.log(err);
    };
};

exports.universidad_delete = async(req, res) => {
        try {
            const {
              params: { id },
            } = req;
        
            console.log(req);
        
            await Universidad.deleteOne({ _id: id });
        
            res.send({ message: "Uni eliminada con exito" });
          } catch (err) {
            console.log(err);
            res.send(err);
          }
};
    
exports.universidad_getById = async(req, res) =>{
        const {
            params: { id },
          } = req;
        
          const data = await Universidad.findOne({ _id: id }).populate("universidad");
        
          res.send(data);
};
    
exports.universidad_getAll = async(req, res) =>{
        const data = await Universidad.find().populate("universidad");
    
        res.send(data);
};