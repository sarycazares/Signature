const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const materiaSchema = mongoose.Schema({

nombre:{
    type: String,
    minlenght:2,
    required:true,
},

facultad:[{

    type: String,
    facultad:{type:mongoose.Types.ObjectId, ref:"facultad"}
}
],

carrera:[{
    type: String,
    carrera:{type:mongoose.Types.ObjectId, ref:"carrera"}

}
],

semestre:{
    type: Number,
    required: true,
},


})

const Materia = mongoose.model("materia", materiaSchema);
module.exports = Materia;