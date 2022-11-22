import {useState, useRef}from "react";
import {createUsuario} from "../../services/UsuarioService";
import {ReCAPTCHA} from "react-google-recaptcha";


export default  function useFormUsuario(initialForm, validateForm){


//const[captchaRef] = useState(captcha);
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

};
const handleBlur=(event)=>{
    handleChange(event);
setErrors(validateForm(form));
};

const handleSubmit= async (event)=>{
    event.preventDefault();
    //const token =  await captchaRef.current.getValue();
    //console.log(token);
   // captchaRef.current.reset();
    

    const res = await createUsuario(form);
    console.log(res);
};

return{
form, errors,loading,response,handleChange,handleBlur, handleSubmit

};
}

