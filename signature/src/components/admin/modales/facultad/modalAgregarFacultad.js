import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../../css/formularios.css";
import RegEx from "../../../../hooks/RegEx";
import useFormFacultad from "../../../../hooks/UseForm/UseFormFacultad";
import ModalsEvents from "../../../../hooks/ModalsEvents";
import { BrowserRouter } from "react-router-dom";

const initialForm = {
  facultad: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regExFacultad = RegEx.regFacultad;

  //if de los RegEx

  if (form.facultad.trim().match(regExFacultad)) {
    //console.log("listo");
  } else {
    errors.facultad = "Escribe correctamente tu facultad";
  }

  return errors;
};

export default function ModalAgregarFacultad(props) {
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
  } = useFormFacultad(initialForm, validationsForm);

  return (
    <>
      <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Agregar Facultad
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form" id="form">
              <h1>Agregar Facultad</h1>
              <br />
              <div className="grupo">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.facultad}
                  name="facultad"
                  id="facultad"
                  title="El nombre para la facultad debe contener unicamente letras"
                  required
                />
                <span className="barra"></span>
                <label className="datos-form" for="">
                  Facultad
                </label>
                {errors.facultad && (
                  <p className="errorsForm"> {errors.facultad}</p>
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
