const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const carreraSchema = new mongoose.Schema({

carrera_nombre:{
    type: String,
},

facultad:{
    type: String,
    facultad:{type: mongoose.Types.ObjectId, ref: "facultad"} //objeto de rerferencia para almacen de carrera asociada a "que" facultad
},

})

const Carrera = mongoose.model("carrera", carreraSchema);
module.exports = Carrera;
