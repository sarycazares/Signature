import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../../css/formularios.css";
import RegEx from "../../../../hooks/RegEx";
import useFormProfesor from "../../../../hooks/UseForm/UseFormProfesor";
import ModalsEvents from "../../../../hooks/ModalsEvents";
import { BrowserRouter } from "react-router-dom";
import {ReCAPTCHA} from "react-google-recaptcha";

const initialForm = {
  facultad: "",
  nombre: "",

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

const validationsForm = (form) => {
  let errors = {};
  let regExFacultad = RegEx.regFacultad ;
  let regExProfesor = RegEx.regProfesor;

//if de los RegEx


    if ((form.facultad.trim()).match(regExFacultad)) {
      //console.log("listo");
    } else {
      errors.facultad = "Escribe correctamente tu facultad";
    }

    if ((form.profesor.trim()).match(regExProfesor)) {
      //console.log("listo");
    } else {
      errors.profesor = "Escribe un nombre valido";
    }

  return errors;
};



export default function ModalAgregarProfesor(props) {


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
    handleChange,
    arregloFacultad,
    handleFocus,
    handleBlur,
    handleSubmit,

  
  } = useFormProfesor(initialForm, validationsForm, cargarOpcionesCombo);

  

  return (
    <>
 
 <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Agregar Profesor
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={handleSubmit}>
            <div className="form" id="form">
              <h1>Agregar Profesor</h1>
              <br />

             
              <div className="grupo">
              <h4>Facultad</h4>
              <select class="categorias-select" name="facultad"
                  onChange={handleChange} id="menuEtiquetas"  value={form.facultad}  items={arregloFacultad} onFocus={handleFocus}> 
                      {tontoarreglo(arregloFacultad,0)}
                      {tontoarreglo(arregloFacultad,1)}
                      {tontoarreglo(arregloFacultad,2)}
                                    
                    </select>
                    <button type="button" className="SeleccionarButton">Seleccionar</button>
              </div>
              <br />
              
              <div className="grupo">

                  <input
                  type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.nombre}
                    name="nombre"
                    id="nombre"
                    title="Escriba un nombre correcto"
                    required
                  />
                  <span className="barra"></span>
                  <label className="datos-form" for="">
                    Profesor
                  </label>
                  {errors.nombre && <p className="errorsForm"> {errors.nombre}</p>}

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
