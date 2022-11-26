import {useState, useRef}from "react";
import {createFacultad, deleteFacultad, getFacultad_byName} from "../../services/facultadService";
import {getFacultad, updateFacultad} from "../../services/facultadService"
import {ReCAPTCHA} from "react-google-recaptcha";


export default  function useFormFacultad(initialForm, validateForm, cargarOpcionesCombo,cargarOpcionesCombo_id){

    const [arregloFacultad,setarregloFacultad] = useState({})
    const [arregloFacultad_id,setarregloFacultad_id] = useState({})
const[form,setForm] = useState(initialForm);
const[errors,setErrors]=useState({});
const[loading,setLoading]=useState(false);
const[response,setResponse]=useState(null);

const handleChange=(event)=>{
    const{name,value} = event.target;
setForm({//manda al form en la estructura
    ...form,//asinacion del initial form 
    [name]: value,//name es el nombre del input y se le asigna el valor del evento
  });

  if(name == "facultad"){//si eliges la etiqueta facultad...

    setForm({//se eligen aqui los demas valores
        ...form,
        facultad:value,
        nombre: value,
        _id: value,
      });
    console.log("pan")
    
  }
  //console.log(form);

};
const handleBlur=(event)=>{
    handleChange(event);
setErrors(validateForm(form));
};

const handleSubmit= async (event)=>{
    event.preventDefault();
    const res = await createFacultad(form);
    console.log(res);
};

const handleSubmitModif= async (event)=>{
    event.preventDefault();
    const res = await updateFacultad(form);
    console.log(res);
};

const handleSubmit_byName= async (event)=>{
    event.preventDefault();
    console.log("Entra al byName")
    const res = await getFacultad_byName(form);
    console.log(res);
};

const handleDelete = async(event) =>{
    event.preventDefault();
    const res = await deleteFacultad(form);
    console.log(res);
}

const handleFocus= async (event)=>{
    event.preventDefault();
    const res = await getFacultad(form);
   
    console.log(res);
    console.log("esta cargando algo :v");
    //this.setState({facultad: res});
    setarregloFacultad(cargarOpcionesCombo(res));
};

const handleFocus_id= async (event)=>{
    event.preventDefault();
    const res = await getFacultad(form);
   
    console.log(res);
    console.log("esta cargando algo :v");
    //this.setState({facultad: res});
    setarregloFacultad_id(cargarOpcionesCombo_id(res));
};



return{
form, errors,loading,response,handleChange,handleBlur, handleSubmit, handleFocus, arregloFacultad, handleSubmit_byName, 
handleSubmitModif, handleFocus_id, arregloFacultad_id, handleDelete

};
}