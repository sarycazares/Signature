import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import '../../../css/formularios.css';
import '../../navBar/modales/style.css';
import ModalsEvents from '../../../hooks/ModalsEvents';
import Redirects from '../../../hooks/Redirects';


export default function ModalIniciarSesion() {

  const {
    show,
    handleClose,
    handleShow
  } = ModalsEvents();


  const {
    irLogin
  } = Redirects();
  
  

  return (
    <>

      <abbr onClick={handleShow} title="Cerrar Sesión" id="CerrarSesionModal"><a className="categoria" id="CerrarSesionCategoria"><img src={require('../../../recursos/images/icons/x-circle-solid-24.png')}/></a></abbr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

          <h4 class="modal_titulo">CERRAR SESIÓN </h4>
                <div class="modal_mensaje">
                    <p>¿De verdad quieres cerrar sesión? :c</p>
                </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" className="buttonHeader" onClick={irLogin}>
            Cerrar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

