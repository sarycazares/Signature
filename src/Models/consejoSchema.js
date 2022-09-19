const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const consejoSchema = mongoose.Schema({

consejo:{
    type: String,
    required: true,
    minlenght: 2,
},

alumno:{
    type: Objectid,
    required: true,
},

materia:{
    type: Objectid,
    required: true,
},

fecha:{
    type: Date,
    required: true,
},

})

const Consejo = mongoose.model("consejo", materiaSchema);
module.exports = Consejo;