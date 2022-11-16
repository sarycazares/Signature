const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose

const UsuarioSchema = new mongoose.Schema({
   
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
    type: mongoose.Types.ObjectId,
    ref: "facultad",
}
],

carrera:[{
    type: mongoose.Types.ObjectId,
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

});

console.log("entra usuario");
const Usuario = mongoose.model("usuario", UsuarioSchema);
module.exports = Usuario;