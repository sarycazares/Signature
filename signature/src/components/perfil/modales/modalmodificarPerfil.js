import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../css/formularios.css";
import RegEx from "../../../hooks/RegEx";
import useFormUsuario from "../../../hooks/UseForm/UseFormUsuario";
import ModalsEvents from "../../../hooks/ModalsEvents";
import { BrowserRouter } from "react-router-dom";
import {ReCAPTCHA} from "react-google-recaptcha";

const initialForm = {
  matricula: "",
  usuario: "",
  facultad: "",
  carrera: "",
  semestre: "",
  contraseña: "",
  confirmarContraseña: "",
  color:"#49408c",

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
if ((form.color.trim()).match("")) {
  //console.log("listo");
} else {
  errors.color = "Elije un color";
}


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



export default function ModalModificarPerfil(props) {

  const captcha = useRef(null);

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

  
  } = useFormUsuario(initialForm, validationsForm, captcha);

  

  return (
    <>
 
 <abbr onClick={handleShow} title="Modificar Perfil" id="ModificarPerfilModal"><a className="categoria" id="CerrarSesionCategoria"><img src={require('../../../recursos/images/icons/face-solid-24.png')}/></a></abbr>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
  </Modal.Header>
  <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form" id="form">
              <h1>Modificar</h1>

              <div className="grupo">
                <img
                  style={{ maxHeight: "500px", backgroundColor: form.color }}
                  id="imagen-descripcionPerfil"
                  src={require("../../../recursos/images/icons/Icon_user-solid-240.png")}
                />
                <input
                  type="color"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.color}
                  name="color"
                  id="color"
                  className="colorInput"
                  required
                />
                <span className="barra"></span>
                <label className="datos-form" for="">
                  Color
                </label>
                {errors.color && <p className="errorsForm"> {errors.color}</p>}
              </div>
              <br />
              
              <div className="grupo">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.matricula}
                  name="matricula"
                  id="matricula"
                  required
                />
                <span className="barra"></span>
                <label className="datos-form" for="">
                  Matricula
                </label>
                {errors.matricula && (
                  <p className="errorsForm"> {errors.matricula}</p>
                )}
              </div>
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
              <h4>Carrera</h4>
              <select class="categorias-select" name="carrera"
                  onChange={handleChange} id="menuEtiquetas"> 
                        <option selected value = "0"> 
                            ...
                        </option>
                                    
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
                  value={form.usuario}
                  name="usuario"
                  id="usuario"
                  title="El usuario debe de ser de minimo 9 a maximo 15 caracteres que solo contengan letras y numeros"
                  required
                />
                <span className="barra"></span>
                <label className="datos-form" for="">
                  Usuario
                </label>
                {errors.usuario && (
                  <p className="errorsForm"> {errors.usuario}</p>
                )}
              </div>
              <br />
              <div className="grupo">
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
                <span className="barra"></span>
                <label className="datos-form" for="">
                  Contraseña
                </label>
                {errors.contraseña && (
                  <p className="errorsForm"> {errors.contraseña}</p>
                )}
              </div>
              <br />
              <div className="grupo">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.confirmarContraseña}
                  name="confirmarContraseña"
                  id="confirmarContraseña"
                  required
                />
                <span className="barra"></span>
                <label id="LabelConfContra" className="datos-form" for="">
                  Confirmar Contraseña
                </label>
                {errors.confirmarContraseña && (
                  <p className="errorsForm"> {errors.confirmarContraseña}</p>
                )}
              </div>
              <br />


              <Button type="submit" variant="secondary" >
                Modificar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
     
    </>
  );
}
