const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const facultadSchema = mongoose.Schema({

nombre:{
    type: String,
    minlenght: 2,
    maxlenght: 255,
    required: true,
},

//se utilizara unicamente el nombre pues utilizaremos facultades de la UANL unicamente
})

const Facultad = mongoose.model("facultad", facultadSchema);
module.exports = Facultad;