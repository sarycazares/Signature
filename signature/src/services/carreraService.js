import {AxiosConfig as axios} from "./AxiosConfig"

export const getCarreras = async () => {
    //const response = await axios({ url: "/students", method: "get" });
    try {
      const response = await axios.get("/carrera");
  
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  export const createCarrera = async (carrera) => {
    try {
      console.log(carrera);
      const response = await axios.post("/carrera", carrera);
      console.log("si que si");
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }

  };
