const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const carreraSchema = mongoose.Schema({

nombre:{
    type: String,
},

facultad:{
    type: String,
},

})

const Carrera = mongoose.model("carrera", materiaSchema);
module.exports = Carrera;