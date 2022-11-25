import {AxiosConfig as axios} from "./AxiosConfig"


export const tokenProcess = async (token) => {
  
  
  try {

    console.log(token);
    const response = await axios.post('/token', token);
    console.log(response);

  } catch (err) {
    console.error(err);
    return "Ocurrió un error inesperado";
  }

};