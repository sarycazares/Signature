import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../../css/formularios.css";
import RegEx from "../../../../hooks/RegEx";
import useFormFacultad from "../../../../hooks/UseForm/UseFormFacultad";
import ModalsEvents from "../../../../hooks/ModalsEvents";
import { BrowserRouter } from "react-router-dom";

let facultadEncontrada = {};
let idEncontrado = {};
let indexEncontrado;

const initialForm = {
  facultad_nombre: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regExFacultad = RegEx.regFacultad;
  let regExUniversidad = RegEx.regUniversidad;

  //if de los RegEx

  if (form.facultad.trim().match(regExFacultad)) {
    //console.log("listo");
  } else {
    errors.facultad = "Escribe correctamente tu facultad";
  }


  return errors;
};


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



export default function ModalEliminarFacultad(props) {
  const { show, handleClose, handleShow } = ModalsEvents();

  // Se mandan a importar las funciones necesarias desde hooks de UseForm que hara cada
  // comportamiento de mi form

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleFocus,
    arregloFacultad,
    handleBlur,
    handleSubmit,
    handleDelete,
  } = useFormFacultad(initialForm, validationsForm, cargarOpcionesCombo);

  return (
    <>
      <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Eliminar Facultad
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleDelete}>
            <div className="form" id="form">
              <h1>Eliminar Facultad</h1>
              <br />
              <div className="grupo">
              <h4>Facultad</h4>
              <select class="categorias-select" name="facultad" 
                  onChange={handleChange} id="menuEtiquetas"
                  items={arregloFacultad} onFocus={handleFocus}
                  vale = {form.facultad_nombre}> 
                      {tontoarreglo(arregloFacultad,0)}
                      {tontoarreglo(arregloFacultad,1)}
                      {tontoarreglo(arregloFacultad,2)}     
                    </select>
                
              </div>
              <br />
              
              <Button type="submit" variant="secondary">
                Eliminar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
