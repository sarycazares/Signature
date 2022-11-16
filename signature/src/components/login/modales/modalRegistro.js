import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../css/formularios.css";
import RegEx from "../../../hooks/RegEx.js";
import useForm from "../../../hooks/UseForm";
import ModalsEvents from "../../../hooks/ModalsEvents";
import UsuarioCreate from "../modales/crear";
import { BrowserRouter } from "react-router-dom";

const initialForm = {
  matricula: "",
  usuario: "",
  facultad: "",
  carrera: "",
  semestre: "",
  contraseña: "",
  confirmarContraseña: "",

};

const validationsForm = (form) => {
  let errors = {};
  let regExMatricula = RegEx.regMatricula;
  let regExFacultad = RegEx.regFacultad ;
  let regExCarrera = RegEx.regCarrera;
  let regExSemestre = RegEx.regMatricula;
  let regExUsuario = RegEx.regUsuario;
  let regExContraseña = RegEx.regContraseña;
  let regExConfirmarContraseña = RegEx.regContraseñaConfirmada;
//if de los RegEx
    if ((form.matricula.trim()).match(regExMatricula)) {
      //console.log("listo");
    } else {
      errors.matricula = "Escribe una matricula valida";
    }

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

    if ((form.semestre.trim()).match(regExSemestre)) {
      //console.log("listo");
    } else {
      errors.semestre = "Ingresa un semestre correcto";
    }

    if ((form.usuario.trim()).match(regExUsuario)) {
      //console.log("listo");
    } else {
      errors.usuario = "Escribe un usuario aceptado";
    }

    if ((form.contraseña.trim()).match(regExContraseña)) {
      //console.log("listo");
    } else {
      errors.contraseña = "Escribe una contraseña aceptada";
    }
    
    if((form.confirmarContraseña.trim()) == (form.contraseña.trim())){
    if ((form.confirmarContraseña.trim()).match(regExConfirmarContraseña)) {
      //console.log("listo");
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

export default function ModalRegistro(props) {



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
          <form onSubmit={handleSubmit}>
            <div class="form" id="form">
              <h1>Registro</h1>
              <br />
              <div class="grupo">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.matricula}
                  name="matricula"
                  id="matricula"
                  required
                />
                <span class="barra"></span>
                <label class="datos-form" for="">
                  Matricula
                </label>
                {errors.matricula && <p className="errorsForm"> {errors.matricula}</p>}
              </div>
              <br />

              <div class="grupo">

              <input
                 type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.facultad}
                  name="facultad"
                  id="facultad"
                  title="El nombre para la facultad debe contener unicamente letras y, de ser el caso, numeros"
                  required
                />
                <span class="barra"></span>
                <label class="datos-form" for="">
                  Facultad
                </label>
                {errors.facultad && <p className="errorsForm"> {errors.facultad}</p>}

              </div>
              <br/> 
              
                <div class="grupo">

                <input
                  type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.carrera}
                    name="carrera"
                    id="carrera"
                    title="El nombre para la carrera debe contener unicamente letras y, de ser el caso, numeros"
                    required
                  />
                  <span class="barra"></span>
                  <label class="datos-form" for="">
                    Carrera
                  </label>
                  {errors.carrera && <p className="errorsForm"> {errors.carrera}</p>}

                </div>
                <br/> 


              <div class="grupo">

                  <input
                  type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.semestre}
                    name="semestre"
                    id="semestre"
                    title="El semestre debe ser digitado unicamente con numeros"
                    required
                  />
                  <span class="barra"></span>
                  <label class="datos-form" for="">
                    Semestre
                  </label>
                  {errors.semestre && <p className="errorsForm"> {errors.semestre}</p>}

                </div>
                <br/> 

                
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
              <Button type="submit" variant="secondary" >
                Registrarme
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
     
    </>
  );
}
