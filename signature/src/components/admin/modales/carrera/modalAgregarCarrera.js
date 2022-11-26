import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../../css/formularios.css";
import RegEx from "../../../../hooks/RegEx";
import useFormCarrera from "../../../../hooks/UseForm/UseFormCarrera"
//import { facultad_getAll } from "../../../../../../backend/src/Controllers/facultadController";
import ModalsEvents from "../../../../hooks/ModalsEvents";
import { BrowserRouter } from "react-router-dom";

const initialForm = {
  facultad: "",
  carrera_nombre: "",
};


const validationsForm = (form) => {
  let errors = {};
  let regExFacultad = RegEx.regFacultad ;
  let regExCarrera = RegEx.regCarrera;

//if de los RegEx


    if ((form.facultad.trim()).match(regExFacultad)) {
      //console.log("listo");
    } else {
      errors.facultad = "Escribe correctamente tu facultad";
    }

    if ((form.carrera.trim()).match(regExCarrera)) {
      //console.log("listo");
    } else {
      errors.carrera = "Escribe una carrera valida";
    }

  return errors;
};


let facultadEncontrada = {};
let indexEncontrado;

const cargarOpcionesCombo = (opciones) => {

  let arregloFacultad = {};
//arregloFacultad = opciones;
opciones.map((facultad, index) => {
  
  facultadEncontrada = facultad.facultad_nombre;
  //console.log(facultadEncontrada.facultad_nombre);
   indexEncontrado = index;

 arregloFacultad[index] = facultadEncontrada;
 //arregloFacultad.push = <option key={indexEncontrado} value={indexEncontrado}>{facultadEncontrada}</option>;



})

return arregloFacultad;
 
 // return opcion;
};

const tontoarreglo = (arregloFacultad, index)=>{

  try{

     return <option value={arregloFacultad[index]}>{arregloFacultad[index]}</option>;

  
} catch{
  return <option value="0">...</option>;
}

}



export default function ModalAgregarCarrera(props) {

  const {
    show,
    handleClose,
    handleShow
  } = ModalsEvents();

  // Se mandan a importar las funciones necesarias desde hooks de UseForm que hara cada
  // comportamiento de mi form

  const {
    form,
    errors,
    loading,
    response,
    arregloFacultad,
    handleFocus,
    handleChange,
    handleBlur,
    handleSubmit,

  
  } = useFormCarrera(initialForm, validationsForm,cargarOpcionesCombo);

  

  return (
    <>
 
 <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Agregar Carrera
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={handleSubmit} >
            <div className="form" id="form">
              <h1>Agregar Carrera</h1>
              <br />

              <div className="grupo" >
              <h4>Facultad</h4>
              <select class="categorias-select" name="facultad"
                  onChange={handleChange} id="menuEtiquetas" items={arregloFacultad} onFocus={handleFocus}
                  value={form.facultad}> 
                      {tontoarreglo(arregloFacultad,0)}
                      {tontoarreglo(arregloFacultad,1)}
                      {tontoarreglo(arregloFacultad,2)}
                        
                    </select>
                    
              </div>
              <br />
              
                <div className="grupo">

                <input
                  type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.carrera_nombre}
                    name="carrera_nombre"
                    id="carrera_nombre"
                    title="El nombre para la carrera debe contener unicamente letras y, de ser el caso, numeros"
                    required
                  />
                  <span className="barra"></span>
                  <label className="datos-form" for="">
                    Carrera
                  </label>
                  {errors.carrera_nombre && <p className="errorsForm"> {errors.carrera_nombre}</p>}

                </div>
                <br/> 


              <Button type="submit" variant="secondary" >
                Agregar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
     
    </>
  );
}
