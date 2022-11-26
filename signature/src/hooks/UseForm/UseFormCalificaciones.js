import {useState, useRef}from "react";
import {createResena} from "../../services/calificacionService";
import { getFacultad } from "../../services/facultadService";
import { getCarreras } from "../../services/carreraService";
import { getMaterias } from "../../services/materiaService";
import { getMaestros } from "../../services/maestroService";


export default  function useFormCalificaciones(initialForm, validateForm, cargarOpcionesCombo, cargarOpcionesCombo_carrera,
                                                cargarOpcionesCombo_materia, cargarOpcionesCombo_maestro){

const [arregloFacultad,setarregloFacultad] = useState({})
const [arregloCarrera,setarregloCarrera] = useState({})
const [arregloMateria,setarregloMateria] = useState({})
const [arregloMaestros,setarregloMaestros] = useState({})
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

  console.log(form);

};
const handleBlur=(event)=>{
    handleChange(event);
setErrors(validateForm(form));
};

const handleSubmit= async (event)=>{
    event.preventDefault();
    const res = await createResena(form);
    //console.log(res);
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

const handleFocus_materia= async (event)=>{
    event.preventDefault();
    const res = await getMaterias(form);
   
    console.log(res);
    console.log("esta cargando algo :v");
    //this.setState({facultad: res});
    setarregloMateria(cargarOpcionesCombo_materia(res));
};

const handleFocus_maestro= async (event)=>{
    event.preventDefault();
    const res = await getMaestros(form);
   
    console.log(res);
    console.log("esta cargando algo :v");
    //this.setState({facultad: res});
    setarregloMaestros(cargarOpcionesCombo_maestro(res));
};

return{
form, errors,loading,response,handleChange,handleBlur, handleSubmit,handleFocus,handleFocus_carrera,handleFocus_materia,handleFocus_maestro,
arregloFacultad, arregloCarrera, arregloMateria, arregloMaestros

};
}