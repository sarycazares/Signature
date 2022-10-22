const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const resenaSchema = mongoose.Schema({

materia:{
    type: mongoose.Types.ObjectId,
    required:true,
},

maestro:{
    type: mongoose.Types.ObjectId,
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

const Resena = mongoose.model("resena", resenaSchema);
module.exports = Resena;