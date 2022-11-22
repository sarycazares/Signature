import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../../../css/formularios.css';
import ModalsEvents from '../../../hooks/ModalsEvents';
import useFormCalificaciones from '../../../hooks/UseForm/UseFormCalificaciones';
import RegEx from '../../../hooks/RegEx';

const initialForm = {
  calificacion: "",
  descripcion: "",
  materia:"",
  profesor:"",
  semestre:"1",
  facultad:"",

};

const validationsForm = (form) => {
  let errors = {};
  let regExCalificacion= RegEx.regCalificacion ;
  let regExDescripcion = RegEx.regExDescripcion;
  let regExMateria = RegEx.regExMateria;
  let regExProfesor = RegEx.regExProfesor;

//if de los RegEx


    if ((form.descripcion.trim()).match(regExDescripcion)) {
      //console.log("listo");
    } else {
      errors.descripcion = "Escribe correctamente tu comentario";
    }

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

  
  } = useFormCalificaciones(initialForm, validationsForm);

  return (
    <>
      <abbr onClick={handleShow} title="AgregarCalificación" id="CerrarSesionModal"><a className="categoria" id="CerrarSesionCategoria"><img src={require('../../../recursos/images/icons/comment-edit-solid-24.png')}/></a></abbr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

       
        <form onSubmit={handleSubmit}>
            <div class="form" id="form">
                <h1>Modificar Calificación</h1>
                <br/>
                
                
              <div className="grupo">
                <h4>Facultad</h4>
                <select
                  class="categorias-select"
                  name="facultad"
                  onChange={handleChange}
                  id="menuEtiquetas"
                >
                  <option selected value="0">
                    ...
                  </option>
                </select>
              </div>
              <br />

              <div className="grupo">
                <h4>Carrera</h4>
                <select
                  class="categorias-select"
                  name="carrera"
                  onChange={handleChange}
                  id="menuEtiquetas"
                >
                  <option selected value="0">
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
                <h4>Materia</h4>
                <select
                  class="categorias-select"
                  name="Etiqueta"
                  id="menuEtiquetas"
                >
                  <option selected value="0">
                    ...
                  </option>
                </select>

              </div>
              <br />



              <div className="grupo">
              <h4>Profesor</h4>
              <select class="categorias-select" name="profesor"
                  onChange={handleChange} id="menuEtiquetas"> 
                        <option selected value = "0"> 
                            ...
                        </option>
                                    
                    </select>
              </div>
              <br />


              <div className="grupo">
              <h4>Calificación</h4>
              <select class="categorias-select" name="calificacion"
                  onChange={handleChange} id="menuEtiquetas"> 
                        <option selected value = "1"> 
                        ⭐
                        </option>
                        <option value = "2"> 
                        ⭐⭐
                        </option>
                        <option value = "3"> 
                        ⭐⭐⭐
                        </option>
                        <option value = "4"> 
                        ⭐⭐⭐⭐
                        </option>
                        <option value = "5"> 
                        ⭐⭐⭐⭐⭐
                        </option>
                                    
                    </select>
              </div>
              <br />

                <br/>
                <div class="grupo">
                    <h4>Descripción Breve</h4>
                    <br/>
                    <textarea value={form.descripcion} onBlur={handleBlur} class="detalle-textarea" onChange={handleChange} name="descripcion" rows="4" cols="40" placeholder="Escriba algo"></textarea>
                    {errors.descripcion && (
                  <p className="errorsForm"> {errors.descripcion}</p>
                )}
                </div>
                <br/>
                

                <Button variant="secondary" onClick={handleClose}>
            Modificar
          </Button>
            </div>
        </form>      
    



        </Modal.Body>
      </Modal>
    </>
  );
}
