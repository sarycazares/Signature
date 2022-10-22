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
    type: mongoose.Types.ObjectId,
    ref: "materia",
    required:true,
}
],


})

const Maestro = mongoose.model("maestro", maestroSchema);
module.exports = Maestro;