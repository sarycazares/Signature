
import {AxiosConfig as axios} from "./AxiosConfig"

export const getFacultad = async () => {
    //get_all, me traera todas las facultades ingresadas
    try {
      const response = await axios.get("/facultad");
  
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  export const getFacultad_byName = async (nombre) => {
    //get_all, me traera todas las facultades ingresadas
    try {
      const response = await axios.get(`/facultad/name${nombre}`);
  
      if(response.status==200) {
        console.log("envia informacion");
        return response.data;
      }else{
          return {}
      }
}catch(err){
    console.error(err);
    return err;
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

  export const updateFacultad = async(facultad) =>{
    try{
    console.log(facultad);
    const response = await axios.put("/facultad/update", facultad);
    return "Se ha modificado"
    }catch(err){
      console.error(err);
      return "Ocurrio un error en la modificacion"
    }
   
  }