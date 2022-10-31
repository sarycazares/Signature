import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../css/formularios.css";
import RegEx from "../../../hooks/RegEx.js";
import useForm from "../../../hooks/UseForm";
import ModalsEvents from "../../../hooks/ModalsEvents";

const initialForm = {
  correo: "",
  usuario: "",
  contraseña: "",
  confirmarContraseña: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regExCorreo = RegEx.regEmail;
  let regExUsuario = RegEx.regUsuario;
  let regExContraseña = RegEx.regContraseña;
  let regExConfirmarContraseña = RegEx.regContraseñaConfirmada;

    if ((form.correo.trim()).match(regExCorreo)) {
      console.log("listo");
    } else {
      errors.correo = "Escribe un correo aceptado";
    }

    if ((form.usuario.trim()).match(regExUsuario)) {
      console.log("listo");
    } else {
      errors.usuario = "Escribe un usuario aceptado";
    }

    if ((form.contraseña.trim()).match(regExContraseña)) {
      console.log("listo");
    } else {
      errors.contraseña = "Escribe una contraseña aceptada";
    }
    
    if((form.confirmarContraseña.trim()) == (form.contraseña.trim())){
    if ((form.confirmarContraseña.trim()).match(regExConfirmarContraseña)) {
      console.log("listo");
    } else {
      errors.confirmarContraseña = "Escribe una contraseña aceptada";
    }}
    else{
      errors.confirmarContraseña = "Escribe una contraseña igual al otro campo";
    }

  //if (!form.usuario?.trim()) {
    //errors.usuario = "El Usuario es requerido";
  //}else if(regExUsuario.test(form.usuario.trim())){
   // errors.usuario = "Escribe un usuario aceptado";
   // };


  return errors;
};

export default function ModalRegistro() {

  const {
    show,
    handleClose,
    handleShow
  } = ModalsEvents();

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <Button className="buttonHeader" variant="primary" onClick={handleShow}>
        Registrar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form>
            <div class="form" id="form">
              <h1>Registro</h1>
              <br />
              <div class="grupo">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.correo}
                  name="correo"
                  id="correo"
                  required
                />
                <span class="barra"></span>
                <label class="datos-form" for="">
                  Correo Electronico
                </label>
                {errors.correo && <p className="errorsForm"> {errors.correo}</p>}
              </div>
              <br />
              <div class="grupo">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.usuario}
                  name="usuario"
                  id="usuario"
                  title="El usuario debe de ser de minimo 9 a maximo 15 caracteres que solo contengan letras y numeros"
                  required
                />
                <span class="barra"></span>
                <label class="datos-form" for="">
                  Usuario
                </label>
                {errors.usuario && <p className="errorsForm"> {errors.usuario}</p>}
              </div>
              <br />
              <div class="grupo">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.contraseña}
                  name="contraseña"
                  id="contraseña"
                  title="La contraseña debe de tener 8 caracteres (al menos 1 numero, 1 mayuscula, 1 minuscula y sin espacios en blanco)"
                  onclick="ContraseñaOnclick()"
                  required
                />
                <span class="barra"></span>
                <label class="datos-form" for="">
                  Contraseña
                </label>
                {errors.contraseña && <p className="errorsForm"> {errors.contraseña}</p>}
              </div>
              <br />
              <div class="grupo">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.confirmarContraseña}
                  name="confirmarContraseña"
                  id="confirmarContraseña"
                  required
                />
                <span class="barra"></span>
                <label id="LabelConfContra" class="datos-form" for="">
                  Confirmar Contraseña
                </label>
                {errors.confirmarContraseña && <p className="errorsForm"> {errors.confirmarContraseña}</p>}
              </div>
              <br />
              <Button variant="secondary" onClick={handleClose}>
                Registrarme
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
