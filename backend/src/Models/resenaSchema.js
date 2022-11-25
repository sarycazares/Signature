const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const resenaSchema = mongoose.Schema({

facultad:{
type: String,
required: true,
facultad:{type: mongoose.Types.ObjectId, ref: "facultad"},
},

carrera:{
    type: String,
    required: true,
    carrera:{type: mongoose.Types.ObjectId, ref: "carrera"},
},

semestre:{
    type: Number,
    required: true
},

materia:{
    type: String,
    required: true,
    materia:{type: mongoose.Types.ObjectId, ref: "materia"}
},

profesor:{
    type: String,
    required: true,
    maestro:{type: mongoose.Types.ObjectId, ref:"maestro"}
},

calificacion:{
    type: String,
    required: true
},

descripcion:{
    type: String,
    required: true,
    minlenght: 20
}


})
console.log("entra resena");
const Resena = mongoose.model("resena", resenaSchema);
module.exports = Resena;