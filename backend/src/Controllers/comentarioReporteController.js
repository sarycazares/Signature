//reporte de los comentarios sobre las reseñas
const comentarioResena = require("../models/comentario_resenaSchema");
const resenaSc = require("../models/resenaSchema");

exports.resena_promedio = async (req, res) => {
    try {
      const {
        params: { resena }, //esto porque en teorÃ­a, reseÃ±a es la tabla que enlaza al maesto con la materia especÃ­fica
      } = req;
  
      const data = await comentarioResena.findOne({ resena: resena }).select("calificacion");
      let suma = 0;
      data.calificacion.forEach((element) => {
        suma += element;
      });
      const promedio = Number((suma / data.calificacion.length).toFixed(2));
      res.send({ promedio });
    } catch (error) {
      console.log("ERROR", error);
      res.send(error);
    }
  };

  exports.materia_promedio = async (req, res) => {
    try {
      const {
        params: { materia }, //esto para buscart todas las materias iguales dadas por diferentes maestros
      } = req;
  
      const data = await resenaSc.findOne({ materia: materia }).select("calificacion");
      let suma = 0;
      data.calificacion.forEach((element) => {
        suma += element;
      });
      const promedio = Number((suma / data.calificacion.length).toFixed(2));
      res.send({ promedio });
    } catch (error) {
      console.log("ERROR", error);
      res.send(error);
    }
  };