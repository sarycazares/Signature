import {AxiosConfig as axios} from "./AxiosConfig"

export const getMaestros = async () => {
    //const response = await axios({ url: "/students", method: "get" });
    try {
      const response = await axios.get("/maestro");
  
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  export const createMaestro = async (maestro) => {
    try {
      console.log(maestro);
      const response = await axios.post("/maestro", maestro);
      console.log("si que si");
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }

  };
