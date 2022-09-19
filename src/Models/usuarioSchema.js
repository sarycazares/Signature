const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const usuarioSchema = mongoose.Schema({

matricula:{
    type: String,
    minlength: 6,
},

usuario:{
    type: String,
    required: true,
    minlenght: 2,
    unique: true,
},

facultad:[{
    type: mongoose.Schema.Types.Objectid,
    ref: "facultad",
}
],

carrera:[{
    type: mongoose.Schema.Types.Objectid,
    ref: "carrera",
}
],

semestre:{
    type: Number,
    minlenght:1,
    maxlenght:2,
},

contrasena: {
    type: String,
    required: true,
},

})

const Usuario = mongoose.model("usuario", usuarioSchema);
module.exports = Usuario;