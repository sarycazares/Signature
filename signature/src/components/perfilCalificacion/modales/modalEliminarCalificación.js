import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate } from "react-router-dom";

import '../../../css/formularios.css';
import '../../navBar/modales/style.css'


export default function ModalEliminarCalificacion() {
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

      <abbr onClick={handleShow} title="EliminarCalificación" id="CerrarSesionModal"><a className="categoria" id="CerrarSesionCategoria"><img src={require('../../../recursos/images/icons/comment-x-solid-24.png')}/></a></abbr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

          <h4 class="modal_titulo">ELIMINAR</h4>
                <div class="modal_mensaje">
                    <p>¿De verdad quieres eliminar? :c</p>
                </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" className="buttonHeader" onClick={irHome}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

