const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const resenaSchema = mongoose.Schema({

materia:{
    type: Objectid,
    required:true,
},

maestro:{
    type: Objectid,
    required:true,
},

calificacion:{
    type: Number,
    required:true,
},

fecha:{
    type: Date,
    required:true,
},

})

const Resena = mongoose.model("resena", comentarioSchema);
module.exports = Resena;