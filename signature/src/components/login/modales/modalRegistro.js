import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../../../css/formularios.css';


export default function ModalRegistro() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="buttonHeader"variant="primary" onClick={handleShow}>
        Registrar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

        <form>
            <div class="form" id="form">
                <h1>Registro</h1>
                <br/>
                <div class="grupo">
                    <input type="text" name="R_Email" id="correo" required/><span class="barra"></span>
                    <label class="datos-form" for="">Correo Electronico</label>
                </div>
                <br/>
                <div class="grupo">
                    <input type="text" name="R_User" id="usuario" title="El usuario debe de ser de minimo 9 a maximo 15 caracteres que solo contengan letras y numeros" required/><span class="barra"></span>
                    <label class="datos-form" for="">Usuario</label>
                </div>
                <br/>
                <div class="grupo">
                    <input type="text" name="R_Password" id="contraseña"  title= "La contraseña debe de tener: 8 caracteres, 1 numero, 1 mayuscula, 1 minuscula, 1 caracter especial (¡”#$%&/=’?¡¿:;,.-_+*{][}) y sin espacios en blanco" onclick="ContraseñaOnclick()" required/>
                    <span class="barra"></span>
                    <label class="datos-form" for="">Contraseña</label>
                </div>
                <br/>
                <div class="grupo">
                    <input type="text" name="R_Password2" id="confirmarcontraseña" required/>
                    <span class="barra"></span>
                    <label class="datos-form" for="">Confirmar Contraseña</label>
                </div>
                <br/> 
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

