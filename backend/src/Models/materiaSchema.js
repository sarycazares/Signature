const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const materiaSchema = mongoose.Schema({

nombre:{
    type: String,
    minlenght:2,
    required:true,
},

descripcion:{
    type: String,
    minlenght: 8,
    maxlenght: 64
},

carrera:[{
    type: mongoose.Types.ObjectId,
    ref: "carrera",
}
],

semestre:{
    type: Number,
    required: true,
},

promedio:{
    type: Number,
},

})

const Materia = mongoose.model("materia", materiaSchema);
module.exports = Materia;