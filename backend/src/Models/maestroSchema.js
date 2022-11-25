const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const maestroSchema = mongoose.Schema({

nombre:{
    type: String,
    minlenght: 8,
    maxlenght: 64,
    required: true,
},


facultad:[{
    type: String,
    facultad:{type:mongoose.Types.ObjectId, ref:"facultad"},
    required:true,
}
],


})

const Maestro = mongoose.model("maestro", maestroSchema);
module.exports = Maestro;