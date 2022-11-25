
import {AxiosConfig as axios} from "./AxiosConfig"

export const getFacultad = async () => {
    //const response = await axios({ url: "/students", method: "get" });
    try {
      const response = await axios.get("/facultad");
  
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  export const createFacultad = async (facultad) => {
    try {
      console.log(facultad);
      const response = await axios.post("/facultad", facultad);
      console.log("si que si");
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }

  };