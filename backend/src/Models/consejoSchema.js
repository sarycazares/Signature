const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const consejoSchema = mongoose.Schema({

consejo:{
    type: String,
    required: true,
    minlenght: 2,
},

alumno:{
    type: mongoose.Types.ObjectId,
    required: true,
},

materia:{
    type: mongoose.Types.ObjectId,
    required: true,
},

fecha:{
    type: Date,
    required: true,
},

})

const Consejo = mongoose.model("consejo", consejoSchema);
module.exports = Consejo;