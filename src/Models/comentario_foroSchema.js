const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const comforoSchema = mongoose.Schema({

comentario:{
    type: String,
    minlenght: 2,
    required: true,
},

alumno:[{
    type: mongoose.Types.ObjectId,
    ref: "resena",
    required: true,
}
],
fecha:{
    type: Date,
    required: true,
},

foro:[{
    type: mongoose.Types.ObjectId,
    ref: "foro",
}
],
})

const Comforo = mongoose.model("comforo", comforoSchema);
module.exports = Comforo;