import {AxiosConfig as axios} from "./AxiosConfig"

export const getMaterias = async () => {
    //const response = await axios({ url: "/students", method: "get" });
    try {
      const response = await axios.get("/materia");
  
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  export const createMateria = async (materia) => {
    try {
      console.log(materia);
      const response = await axios.post("/materia", materia);
      console.log("si que si");
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }

  };