const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const comforoSchema = mongoose.Schema({

comentario:{
    type: String,
    minlenght: 2,
    required: true,
},

alumno:[{
    type: mongoose.Schema.Types.Objectid,
    ref: "resena",
    required: true,
}
],
fecha:{
    type: Date,
    required: true,
},

foro:[{
    type: mongoose.Schema.Types.Objectid,
    ref: "foro",
}
],
})

const Comforo = mongoose.model("comforo", materiaSchema);
module.exports = Comforo;