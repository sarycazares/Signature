import {AxiosConfig as axios} from "./AxiosConfig"



export const getUsuarios = async () => {
    //const response = await axios({ url: "/students", method: "get" });
    try {
      const response = await axios.get("/usuario");
  
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  export const createUsuario = async (usuario) => {
    try {
      console.log(usuario);
      const response = await axios.post("/usuario", usuario);
      console.log("si que si");
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }

  };

  export const updateUsuario = async (usuario) =>{
    try{
      console.log("entro en modificar");
      const response = await axios.put("/usuario/modificar", usuario);
      return "Usuario modificado";
    }catch(err){
      console.error(err);
      return "Ocurrio un error inesperado";
    }
  };

  export const deleteUsuario = async(usuario) =>{
    try{

    }catch{

    }

    
  }

  export const logUsuario = async (usuario) =>{
    try{
 
      console.log("entro en login");
      const response = await axios.post("/usuario/login", usuario);
      //service recibe la info
        return response.data;
      
    }catch(err){
      console.error(err);
      console.log("Ocurrio un error, no se encontro nada");
    }
  };