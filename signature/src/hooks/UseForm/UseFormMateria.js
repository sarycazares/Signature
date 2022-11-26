import {useState, useRef}from "react";
import {createMateria, updateUsuario} from "../../services/materiaService";
import {getFacultad} from "../../services/facultadService";
import { getCarreras } from "../../services/carreraService";


export default  function useFormMateria(initialForm, validateForm, cargarOpcionesCombo, cargarOpcionesCombo_carrera){

const [arregloFacultad,setarregloFacultad] = useState({})
const [arregloCarrera,setarregloCarrera] = useState({})
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
    const res = await createMateria(form);
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

const handleFocus_carrera= async (event)=>{
    event.preventDefault();
    const res = await getCarreras(form);
   
    console.log(res);
    console.log("esta cargando algo :v");
    //this.setState({facultad: res});
    setarregloCarrera(cargarOpcionesCombo_carrera(res));
};

return{
form, errors,loading,response,handleChange,handleBlur, handleSubmit, arregloFacultad, handleFocus, handleFocus_carrera, arregloCarrera

};
}