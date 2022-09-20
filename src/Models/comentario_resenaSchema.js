const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const comresSchema = mongoose.Schema({

comentario:{
    type: String,
    minlenght: 2,
    required: true,
},

alumno:[{
    type: mongoose.Types.ObjectId,
    ref: "usuario",
    required: true,
}
],

resena:[{
    type: mongoose.Types.ObjectId,
    ref: "resena",
    required: true,
}
],

calificacion:{
    type: Number,
    required: true,
},

fecha:{
    type: Date,
    required: true,
},

})

const Comres = mongoose.model("comres", comresSchema);
module.exports = Comres;