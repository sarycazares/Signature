import {useState, useRef}from "react";


//cosas que agregue
import {tokenProcess} from '../../services/TokenProcess';

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
    //console.log(token);
   // console.log(form);

    const res = await tokenProcess(token);
    console.log(res);
};

return{
form, errors,loading,response,handleChange,handleBlur, handleSubmit

};
}

