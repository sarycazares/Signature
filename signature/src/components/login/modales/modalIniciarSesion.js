import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate } from "react-router-dom";

import '../../../css/formularios.css';



export default function ModalIniciarSesion() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const irHome = (event) => {
    event.preventDefault();

    console.log("clic");
    navigate('/home');
        

  };

  return (
    <>
      <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Iniciar Sesion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>


        <form onSubmit={irHome}>
        <div class="form" id="form">
                <h1>Iniciar Sesión</h1>
                <br/>
                <div class="grupo">
                    <input value="sarycazares@live.com.mx"type="text" name="L_User" id="usuarioIniciarSesion" required/><span class="barra"></span>
                    <label class="datos-form" for="">Usuario</label>
                </div>
                <br/>
                <div class="grupo">
                    <input value="pan"type="password" name="L_Password" id="contraseñaIniciarSesion" required/><span class="barra"></span>
                    <label class="datos-form" for="">Contraseña</label>
                </div>    
                <br/>

                <Button type="submit" variant="secondary" >Ingresar</Button>
                         
                
            </div>
        </form>      



        </Modal.Body>
      </Modal>
    </>
  );
}

