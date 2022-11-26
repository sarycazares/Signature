import {useState, useRef}from "react";
import {createCarrera} from "../../services/carreraService";
import {getFacultad} from "../../services/facultadService";


export default  function useFormCarrera(initialForm, validateForm, cargarOpcionesCombo){


const [arregloFacultad,setarregloFacultad] = useState({})
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

  //console.log(form);

};
const handleBlur=(event)=>{
    handleChange(event);
setErrors(validateForm(form));
};

const handleSubmit= async (event)=>{
    event.preventDefault();
    const res = await createCarrera(form);
    console.log(res);
};

const handleFocus= async (event)=>{
    event.preventDefault();
    const res = await getFacultad(form);
   
    console.log(res);
    console.log("esta cargando algo :v");
    //this.setState({facultad: res});
    setarregloFacultad(cargarOpcionesCombo(res));
};

return{
form, errors,loading,response,handleChange,handleBlur, handleSubmit, handleFocus, arregloFacultad

};
}