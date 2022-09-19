const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/PW2", { useNewUrlParser: true}).then(() => console.log("Conexion Exitosa"))
.catch(() => {
    console.log("Error al conectar");
    Process.exit();
});

