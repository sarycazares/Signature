import {useState, useRef}from "react";
import TokenRecaptcha from '../../hooks/token';



export default  function useFormSesiones(initialForm, validateForm, captchaRef){


const[captcha] = useState(captchaRef);
const[form,setForm] = useState(initialForm);
const[errors,setErrors]=useState({});
const[loading,setLoading]=useState(false);
const[response,setResponse]=useState(null);

const handleChange=(event)=>{
    const{name,value} = event.target;

setForm({
    ...form,
    [name]: value,
  });


};
const handleBlur=(event)=>{
    handleChange(event);
setErrors(validateForm(form));
};

const handleSubmit= async (event)=>{
    event.preventDefault();
    
    const token = await captcha.current.getValue();
    captcha.current.reset();
    setForm({
        ...form,
        tokenNum: token
    });
    console.log(token);
    console.log(form);

   /* await axios.post("http://localhost:3001/api", {token})
    .then(res =>  console.log(res))
    .catch((error) => {
    console.log(error);
    }) */

    //const res = await createUsuario(form);
    //console.log(res);
};

return{
form, errors,loading,response,handleChange,handleBlur, handleSubmit

};
}

