const mongoose = require("mongoose"); //se crea una instancia para uso de mongoose
const universidadSchema = mongoose.Schema({

nombre:{
    type: String,
    minlenght: 2,
    maxlenght: 255,
    required: true,
},

siglas:{
    type: String,
    minlenght: 1,
    maxlenght: 30,
    required: true,
},

estado:{
    type: String,
    minlenght: 2,
    maxlenght: 255,
},

})

const Universidad = mongoose.model("universidad", universidadSchema);
module.exports = Universidad;