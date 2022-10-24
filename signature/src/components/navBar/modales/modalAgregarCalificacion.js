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
      <abbr onClick={handleShow} title="AgregarCalificación" id="CerrarSesionModal"><a className="categoria" id="CerrarSesionCategoria"><img src={require('../../../recursos/images/icons/comment-add-solid-24.png')}/></a></abbr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

        <form>
            <div class="form" id="form">
                <h1>Agregar Calificación</h1>
                <br/>
                <div class="grupo">
                    <input type="number" name="agregarCalificacion" id="agregarCalificacion" title="Calificación" required/><span class="barra"></span>
                    <label class="datos-form" for="">Calificación</label>
                </div>
                <br/>
                <div class="grupo">
                    <h4>Descripción Breve</h4>
                    <br/>
                    <textarea class="detalle-textarea" name="descripcion" rows="4" cols="40" placeholder="Escriba algo"></textarea>
                </div>
                <br/>
                <div class="grupo">
                <h4>Materias</h4>
                    <select class="categorias-select" name="Etiqueta" id="menuEtiquetas"> 
                        <option selected value = "0"> 
                            ...
                        </option>
                                    
                    </select>
                    <br/><br/>
                </div>
                <div class="grupo">
                <h4>Maestros</h4>
                    <select class="categorias-select" name="Etiqueta" id="menuEtiquetas"> 
                        <option selected value = "0"> 
                            ...
                        </option>
                                    
                    </select>
                    <br/><br/>
                </div> 
                <br/> 
                <Button variant="secondary" onClick={handleClose}>
            Agregar
          </Button>
            </div>
        </form>      



        </Modal.Body>
      </Modal>
    </>
  );
}
