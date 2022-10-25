import {useState}from "react";

export default  function useForm(initialForm, validateForm){

const[form,setForm] = useState(initialForm);
const[errors,setErrors]=useState({});
const[loading,setLoading]=useState(false);
const[response,setResponse]=useState(null);

const handleChange=(event)=>{
    const{name,value} = event.target;
console.log('entra aqui');
setForm({
    ...form,
    [name]: value,
  });

  console.log(form);

};
const handleBlur=(event)=>{
    handleChange(event);
setErrors(validateForm(form));
};
const handleSubmit=(event)=>{};

return{
form,errors,loading,response,handleChange,handleBlur, handleSubmit

};
}

