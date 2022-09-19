const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const maestroSchema = mongoose.Schema({

nombre:{
    type: String,
    minlenght: 8,
    maxlenght: 64,
    required: true,
},


cedula:{
    type: String,
    minlenght: 6,
    maxlenght: 64,
    required: true,
},

materia:[{
    type: mongoose.Schema.Types.Objectid,
    ref: "materia",
    required:true,
}
],


})

const Maestro = mongoose.model("maestro", materiaSchema);
module.exports = Maestro;