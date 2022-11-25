const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
//var uniqueValidator = require('mongoose-unique-validator');

let rolesvalidos = {
    values:["Admin", "User"]
}

const UsuarioSchema = new mongoose.Schema({

    color:{
    type: String,
},   

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
    type: String,
    facultad: {type: mongoose.Types.ObjectId, ref:"facultad"}
}
],

carrera:[{
    type: String,
    carrera: {type: mongoose.Types.ObjectId, ref:"carrera"}
}
],

semestre:{
    type: Number,
    minlenght:1,
    maxlenght:2,
},

contraseña: {
    type: String,
    required: true,
    
},

role:{
    type:String,
    default: 'User',
    required: [true],
    admin: false,
    enum: rolesvalidos
},

});

console.log("entra usuario");

UsuarioSchema.methods.toJson = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.contraseña;
   
    return userObject;
};

/*UsuarioSchema.plugin(uniqueValidator,{
    message: '{PATH} debe ser unico'
})*/

const Usuario = mongoose.model("usuario", UsuarioSchema);
module.exports = Usuario;