import {useState, useRef}from "react";
import {createUsuario, updateUsuario, logUsuario} from "../../services/UsuarioService";
import {ReCAPTCHA} from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

import { tokenProcess } from "../../services/TokenProcess";

export default  function useFormUsuario(initialForm, validateForm,captchaRef){
    const navigate = useNavigate();

    const[captcha] = useState(captchaRef);
const[form,setForm] = useState(initialForm);
const[errors,setErrors]=useState({});
const[loading,setLoading]=useState(false);
const[response,setResponse]=useState(null);

const handleChange=(event)=>{
    const{name,value} = event.target;
//console.log('entra aqui');
setForm({
    ...form,
    [name]: value,
  });

  //console.log(form);

  if(name == "usuario"){
    sessionStorage.setItem("usuario", value);
  }

};
const handleBlur=(event)=>{
    handleChange(event);
setErrors(validateForm(form));
};

//submit de creacion
const handleSubmit= async (event)=>{
    event.preventDefault();
    //const token =  await captchaRef.current.getValue();
    //console.log(token);
   // captchaRef.current.reset();
    

    const res = await createUsuario(form); //redirige a Usuarioservice para tomar la funcion createUsuario
    console.log(res);
};

//submit de modificacion
const handleSubmitModif = async(event)=>{
    event.preventDefault();
    const res = await updateUsuario(form);
    console.log(res);
}


let accessToken;
let accessUsuario;

//submit de login
const handleSubmitLog = async(event)=>{
    //event.preventDefault();
    //const res = await logUsuario(form);
    //console.log("clic");
    //navigate("/home");        
    //console.log(res);  
    //if para verificar si lo que se esta mandando es un mensaje erroneo u otro mensaje correcto

    const{name,value} = event.target;

    
    const token = await captcha.current.getValue();
    captcha.current.reset();
    const tokenres = await tokenProcess(token);
    console.log(tokenres);

    if(tokenres != null){

    sessionStorage.setItem("token", tokenres);
    const res = await logUsuario(form);
    console.log("clic");

   if(res != null) {
    console.log(res);  
    navigate("/home"); 
   } else{
    setErrors(validateForm(true));
   }} else{
    setErrors(validateForm(true));
   }
}

return{
form, errors,loading,response,handleChange,handleBlur, handleSubmit, handleSubmitModif, handleSubmitLog

};
}

