import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../../css/formularios.css";
import RegEx from "../../../../hooks/RegEx";
import useFormMateria from "../../../../hooks/UseForm/UseFormMateria";
import ModalsEvents from "../../../../hooks/ModalsEvents";
import { BrowserRouter } from "react-router-dom";

const initialForm = {
  facultad: "",
  carrera: "",
  semestre: "",
  nombre: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regExFacultad = RegEx.regFacultad;
  let regExCarrera = RegEx.regCarrera;
  let regExMateria = RegEx.regMateria;

  //if de los RegEx

  if (form.facultad.trim().match(regExFacultad)) {
    //console.log("listo");
  } else {
    errors.facultad = "Escribe correctamente tu facultad";
  }

  if (form.carrera.trim().match(regExCarrera)) {
    //console.log("listo");
  } else {
    errors.carrera = "Escribe una carrera valida";
  }

  if (form.materia.trim().match(regExMateria)) {
    //console.log("listo");
  } else {
    errors.materia = "Ingresa un nombre correcto";
  }

  return errors;
};


let facultadEncontrada = {};
let carreraEncontrada = {};
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

const cargarOpcionesCombo_carrera = (opciones) => {

  let arregloCarrera = {};
//arregloFacultad = opciones;
opciones.map((carrera, index) => {
  
  carreraEncontrada = carrera.carrera_nombre;
  //console.log(facultadEncontrada.facultad_nombre);
   indexEncontrado = index;

 arregloCarrera[index] = carreraEncontrada;
 //arregloFacultad.push = <option key={indexEncontrado} value={indexEncontrado}>{facultadEncontrada}</option>;



})

return arregloCarrera;
 
 // return opcion;
};

const tontoarreglo_carrera = (arregloCarrera, index)=>{

  try{

     return <option value={arregloCarrera[index]}>{arregloCarrera[index]}</option>;

  
} catch{
  return <option value="0">...</option>;
}

}

export default function ModalAgregarMateria(props) {
  const { show, handleClose, handleShow } = ModalsEvents();

  // Se mandan a importar las funciones necesarias desde hooks de UseForm que hara cada
  // comportamiento de mi form

  const {
    form,
    errors,
    loading,
    response,
    arregloFacultad,
    arregloCarrera,
    handleFocus_carrera,
    handleFocus,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormMateria(initialForm, validationsForm,cargarOpcionesCombo, cargarOpcionesCombo_carrera);

  return (
    <>
      <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Agregar Materia
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form" id="form">
              <h1>Agregar Materia</h1>
              <br />

              <div className="grupo">
                <h4>Facultad</h4>
                <select
                  class="categorias-select"
                  name="facultad"
                  onChange={handleChange}
                  value={form.facultad}
                  id="menuEtiquetas"
                  items={arregloFacultad} onFocus={handleFocus}
                >
                      {tontoarreglo(arregloFacultad,0)}
                      {tontoarreglo(arregloFacultad,1)}
                      {tontoarreglo(arregloFacultad,2)}
                </select>
              </div>
              <br />

              <div className="grupo">
                <h4>Carrera</h4>
                <select
                  class="categorias-select"
                  name="carrera"
                  onChange={handleChange}
                  value={form.carrera}
                  id="menuEtiquetas"
                  items={arregloCarrera} onFocus={handleFocus_carrera}
                >
                      {tontoarreglo_carrera(arregloCarrera,0)}
                      {tontoarreglo_carrera(arregloCarrera,1)}
                      {tontoarreglo_carrera(arregloCarrera,2)}
                </select>
              </div>
              <br />

              <div className="grupo">
                <h4>Semestre</h4>
                <select
                  class="categorias-select"
                  name="semestre"
                  onChange={handleChange}
                  id="menuEtiquetas"
                >
                  <option selected value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
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
                  Materia
                </label>
                {errors.nombre && (
                  <p className="errorsForm"> {errors.nombre}</p>
                )}
              </div>
              <br />

              <Button type="submit" variant="secondary">
                Agregar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
