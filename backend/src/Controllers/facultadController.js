const Facultad = require("../models/facultadSchema");
//const Carrera = require("../models/carreraSchema");

exports.facultad_create = async(req, res) => {
    const{body: facultad} = req;

    const facultadDB = new Facultad(facultad);
    //const err = await facultadDB.validate();

    /*if(err.errors) {
        console.log(err);
        res.send(err);
      }
      else {
        //guardar
      }*/
      console.log("sale de compilacion")
      await facultadDB.save().catch((err) => console.log("Algo ha fallado", err));
      console.log("se agrego")
      /*const universidadDB = Universidad.findOne({ _id: UniversidadDB.universidad });
      const universidadSaved = Universidad.findOneAndUpdate(
        { _id: universidadDB.universidad },
        { uni: [...universidadDB.universidad, universidadDB._id] }
      );*/
    
      res.send({
        message: "Facultad creada con exito",
        data: facultadDB,
      });

};

exports.facultad_update = async(req, res) => {
const {body:facultad} = req;
console.log("entra otra vez");
try{
let facultadDB = await Facultad.find({facultad: facultad.facultad_nombre});
if(facultadDB){
  
  console.log("se encontro");
    const{facultad_mod} = facultad;
    const data = await Facultad.updateOne({facultad_mod}, facultad);
    res.send(data);
}

}catch(err){
console.log(err);
};
};

/*exports.facultad_update2 = async(req, res)=>{
  const { id } = req.params; // Los params son los que se envían en el URL.
  const { body } = req; // Traigo mi objeto. Al { variable } se le llama destructuring y me sirve para acceder a las partes de mi objeto
console.log("entra");


  try{
    console.log("entra otra vez");
    const facultadDB = await Facultad.facultad_getById(id); // Hago una consulta basándome en el id. 
    console.log("entra otra vez");
    if(facultadDB){
      console.log("encuentra");
        // Actualizar el contenido de mi fila.
        const data = await User.findOneAndUpdate(  
        // El id en mi base de datos se guarda con un _
            {facultad_nombre: id}, //El primer parámetro es un objeto ya que está entre { }, aquí se guardan los criterios de búsqueda. 
            body, // El segundo parámetro es un objeto con los campos que se van a actualizar. 
            {returnOriginal: false}) // Query Options. Este sirve para que me muestre la data nueva y no la anterior.
        
        res.send({message: "Data updated correctly", data}); // data: data <-- es ambiguo, por lo tanto es lo mismo solo poner data
    }else{
      console.log("no encuentra")
        // Regresar un mensaje de error. 
        res.send({message: "The id does not exists"});
    }
}catch(err){
  console.log("falla")
    res.send(err);
}
}
*/

exports.facultad_delete = async(req, res) => {
    try {
        const {
          params: { nombre },
        } = req;
    
        console.log("entra en delete");
        await Facultad.deleteOne({ facultad_nombre: nombre });
    
        res.send({ message: "Facultad eliminada con exito" });
      } catch (err) {
        console.log(err);
        res.send(err);
      }
};

exports.facultad_getById = async(req, res) =>{
  const { id } = req.params;
  // Método optimizado para buscar por ids.
  const data = await User.findById(id); // Encuentra el primer registro que coincide con la condición. 
  //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

  if(data){
      res.send(data);
  }else{
      res.send({message: "Facultad no existe."})
  }
};

exports.facultad_getAll = async(req, res) =>{
  
    const data = await Facultad.find();

    res.send(data);
};

exports.facultad_getByName = async(req, res) =>{
  const { nombre_facultad } = req.params;
  // Método optimizado para buscar por ids.
  const data = await User.findById(nombre_facultad); // Encuentra el primer registro que coincide con la condición. 
  //const data = await User.findOne({_id: id}); // Es lo mismo que hacer lo de arriba

  if(data){
      res.send(data);
  }else{
      res.send({message: "Facultad no existe."})
  }
};
