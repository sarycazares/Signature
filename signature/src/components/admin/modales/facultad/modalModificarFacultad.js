import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../../css/formularios.css";
import RegEx from "../../../../hooks/RegEx";
import useFormFacultad from "../../../../hooks/UseForm/UseFormFacultad";
import ModalsEvents from "../../../../hooks/ModalsEvents";
import { BrowserRouter } from "react-router-dom";

var cod;
const initialForm = {
  //_id: "",
  facultad_nombre: "",
};

let facultadEncontrada = {};
let idEncontrado = {};
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


const cargarOpcionesCombo_id = (opciones) => {

  let arregloFacultad_id = {};
//arregloFacultad = opciones;
opciones.map((facultad, index) => {
  
  idEncontrado = facultad._id;
  //console.log(facultadEncontrada.facultad_nombre);
   indexEncontrado = index;

 arregloFacultad_id[index] = idEncontrado;
 //arregloFacultad.push = <option key={indexEncontrado} value={indexEncontrado}>{facultadEncontrada}</option>;



})

return arregloFacultad_id;
 
 // return opcion;
};


const toarreglo = (arregloFacultad_id, index)=>{

  try{

     return <option value={arregloFacultad_id[index]}>{arregloFacultad_id[index]}</option>;

  
} catch{
  return <option value="0">...</option>;
}

}


const validationsForm = (form) => {
  let errors = {};
  let regExFacultad = RegEx.regFacultad ;
  let regExNombre = RegEx.regNombre;

//if de los RegEx

  /*  if ((form.facultad.trim()).match(regExFacultad)) {
      //console.log("listo");
    } else {
      errors.facultad = "Escribe correctamente tu facultad";
    }

    if ((form.nombre.trim()).match(regExNombre)) {
      //console.log("listo");
    } else {
      errors.nombre = "Ingresa un nombre correcto";
    }
*/

  return errors;
};



export default function ModalModificarFacultad(props) {


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
    arregloFacultad_id,
    handleFocus,
    handleFocus_id,
    handleSubmitModif,
    handleSubmit_byName,
    handleChange,
    handleBlur,
    handleSubmit,

  
  } = useFormFacultad(initialForm, validationsForm, cargarOpcionesCombo, cargarOpcionesCombo_id);

  

  return (
    <>
 
 <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Modificar Facultad
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>


          <form onSubmit={handleSubmitModif}>
            <div className="form" id="form">
              <h1>Modificar Facultad</h1>
              <br />

              <div className="grupo">
              <h4>Facultad</h4>
             
              <select class="categorias-select" name="facultad_nombre"
                  onChange={handleChange} id="menuEtiquetas" items={arregloFacultad} onFocus={handleFocus}
                  > 
                      {tontoarreglo(arregloFacultad,0)}
                      {tontoarreglo(arregloFacultad,1)}
                      {tontoarreglo(arregloFacultad,2)} 
                    </select>
                    
                    
              </div>
              <br />

              <div className="grupo">
              <h4>Clave</h4>
             
              <select class="categorias-select" name="id_facultades" 
                  onChange={handleChange} id="id_facultades" items={arregloFacultad_id} onFocus={handleFocus_id}
                  
                  > 
                      {toarreglo(arregloFacultad_id,0)}
                      {toarreglo(arregloFacultad_id,1)}
                      {toarreglo(arregloFacultad_id,2)} 
                    </select>
                    
                    
              </div>
              <br />
                    
              <div className="grupo">

                  <input
                  type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.facultad_nombre}
                    name="facultad_nombre"
                    id="facultad_nombre"
                    
                    title="Escriba un nombre de facultad correcto"
                  />
                  <span className="barra"></span>
                  <label className="datos-form" for="">
                    Facultad
                  </label>
                  {errors.facultad_nombre && <p className="errorsForm"> {errors.facultad_nombre}</p>}
                  <button type="submit" className="SeleccionarButton">Modificar</button>
                </div>
                <br/> 

              
            </div>
          </form>
        </Modal.Body>
      </Modal>
     
    </>
  );
}
