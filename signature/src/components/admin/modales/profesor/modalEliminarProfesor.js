import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../../css/formularios.css";
import RegEx from "../../../../hooks/RegEx";
import useFormProfesor from "../../../../hooks/UseForm/UseFormProfesor";
import ModalsEvents from "../../../../hooks/ModalsEvents";
import { BrowserRouter } from "react-router-dom";


const initialForm = {
  facultad: "",
  profesor: "",
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

  if (form.regExUniversidad.trim().match(regExUniversidad)) {
    //console.log("listo");
  } else {
    errors.regExUniversidad = "Escribe una carrera valida";
  }

  return errors;
};

export default function ModalEliminarProfesor(props) {
  const { show, handleClose, handleShow } = ModalsEvents();

  // Se mandan a importar las funciones necesarias desde hooks de UseForm que hara cada
  // comportamiento de mi form

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormProfesor(initialForm, validationsForm);

  return (
    <>
      <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Eliminar Profesor
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form" id="form">
              <h1>Eliminar Profesor</h1>
              <br />

              <div className="grupo">
              <h4>Facultad</h4>
              <select class="categorias-select" name="facultad"
                  onChange={handleChange} id="menuEtiquetas"> 
                        <option selected value = "0"> 
                            ...
                        </option>
                                    
                    </select>
                    
              </div>
              <br />

              <div className="grupo">
              <h4>Profesor</h4>
              <select class="categorias-select" name="profesor"
                  onChange={handleChange} id="menuEtiquetas"> 
                        <option selected value = "0"> 
                            ...
                        </option>
                                    
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
