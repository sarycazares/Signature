import {AxiosConfig as axios} from "./AxiosConfig"

export const createResena = async (resena) => {
    try {
      console.log(resena);
      const response = await axios.post("/resena", resena);
      console.log("si que si");
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }

  };