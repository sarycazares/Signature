import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReCAPTCHA from "react-google-recaptcha";
import {useNavigate } from "react-router-dom";
import reCAPTCHA from "react-google-recaptcha"
import '../../../css/formularios.css';
import ModalsEvents from '../../../hooks/ModalsEvents';
import Redirects from '../../../hooks/Redirects';
//import TokenRecaptcha from '../../../hooks/token';

import RegEx from "../../../hooks/RegEx.js";
import useFormSesiones from "../../../hooks/UseForm/UseFormUsuario";


const initialForm = {
  usuario:"",
  contraseña:"",
  tokenNum:"",
};

const validationsForm = (form) => {
  let errors = {};
  let regExUsuario = RegEx.regUsuario;
  let regExContraseña = RegEx.regContraseña;

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
      return errors;
};

export default function ModalIniciarSesion() {

  const captchaRef = useRef(null);

  const {
    show,
    handleClose,
    handleShow
  } = ModalsEvents();

  const {
    irHome
  } = Redirects();

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmitLog,  
    handleSubmit, 
  } = useFormSesiones(initialForm, validationsForm, captchaRef);

  return (
    <>
      <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Iniciar Sesion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>


        <form onSubmit={handleSubmitLog}>
        <div class="form" id="form">
                <h1>Iniciar Sesión</h1>
                <br/>
                
                <div class="grupo">
                    <input onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.usuario}
                  type="text" name="usuario" id="usuario" required/><span class="barra"></span>
                    <label class="datos-form" for="">Usuario</label>
                </div>
                <br/>
                <div class="grupo">
                    <input onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.contraseña}
                  type="password" name="contraseña" id="contraseña" required/><span class="barra"></span>
                    <label class="datos-form" for="">Contraseña</label>
                </div>    
                <br/>
                <ReCAPTCHA sitekey={'6LcbXRojAAAAABf80rZplZkBO92ig5T6AIc-P-ly'} ref={captchaRef}/>
                <br/>

                <Button type="submit" variant="secondary" >Ingresar</Button>
                         
                
            </div>
        </form>      



        </Modal.Body>
      </Modal>
    </>
  );
}

