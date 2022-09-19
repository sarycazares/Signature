const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const facultadSchema = mongoose.Schema({

nombre:{
    type: String,
    minlenght: 2,
    maxlenght: 255,
    required: true,
},

siglas:{
    type: String,
    minlenght: 2,
    maxlenght: 30,
    required: true
},

universidad:[{
    type: mongoose.Schema.Types.Objectid,
    ref: "universidad",
    required:true,
}
],

ciudad:{
    type: String,
    minlenght: 2,
    maxlenght: 255,
    required: true,
},

})

const Facultad = mongoose.model("facultad", materiaSchema);
module.exports = Facultad;