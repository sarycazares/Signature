const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const foroSchema = mongoose.Schema({

alumno:{
    type: Objectid,
    required: true,
},

publicacion:{
    type: String,
    minlenght: 2,
    required: true,
},

fecha:{
    type: Date,
    required: true,
},


})

const Foro = mongoose.model("foro", materiaSchema);
module.exports = Foro;