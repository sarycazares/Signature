import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../../../css/formularios.css';
import RegEx from '../../../hooks/RegEx';
import useFormCalificaciones from '../../../hooks/UseForm/UseFormCalificaciones';
import ModalsEvents from '../../../hooks/ModalsEvents';

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

let facultadEncontrada = {};
let carreraEncontrada = {};
let materiaEncontrada = {};
let maestroEncontrado = {};
let indexEncontrado;
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const cargarOpcionesCombo = (opciones) => {

  let arregloFacultad = {};
//arregloFacultad = opciones;
opciones.map((facultad, index) => {
  
  facultadEncontrada = facultad.facultad_nombre;
  //console.log(facultadEncontrada.facultad_nombre);
   indexEncontrado = index;

 arregloFacultad[index] = facultadEncontrada;
 //arregloFacultad.push = <option key={indexEncontrado} value={indexEncontrado}>{facultadEncontrada}</option>;



})

return arregloFacultad;
 
 // return opcion;
};

const tontoarreglo = (arregloFacultad, index)=>{

  try{

     return <option value={arregloFacultad[index]}>{arregloFacultad[index]}</option>;

  
} catch{
  return <option value="0">...</option>;
}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const cargarOpcionesCombo_carrera = (opciones) => {

  let arregloCarrera = {};
//arregloFacultad = opciones;
opciones.map((carrera, index) => {
  
  carreraEncontrada = carrera.carrera_nombre;
  //console.log(facultadEncontrada.facultad_nombre);
   indexEncontrado = index;

 arregloCarrera[index] = carreraEncontrada;
 //arregloFacultad.push = <option key={indexEncontrado} value={indexEncontrado}>{facultadEncontrada}</option>;



})

return arregloCarrera;
 
 // return opcion;
};

const tontoarreglo_carrera = (arregloCarrera, index)=>{

  try{

     return <option value={arregloCarrera[index]}>{arregloCarrera[index]}</option>;

  
} catch{
  return <option value="0">...</option>;
}

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
const cargarOpcionesCombo_materia = (opciones) => {

  let arregloMateria = {};
//arregloFacultad = opciones;
opciones.map((materia, index) => {
  
  materiaEncontrada = materia.nombre;
  //console.log(facultadEncontrada.facultad_nombre);
   indexEncontrado = index;

 arregloMateria[index] = materiaEncontrada;
 //arregloFacultad.push = <option key={indexEncontrado} value={indexEncontrado}>{facultadEncontrada}</option>;



})

return arregloMateria;
 
 // return opcion;
};

const tontoarreglo_materia = (arregloMateria, index)=>{

  try{

     return <option value={arregloMateria[index]}>{arregloMateria[index]}</option>;

  
} catch{
  return <option value="0">...</option>;
}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////


const cargarOpcionesCombo_maestro = (opciones) => {

  let arregloMaestros = {};
//arregloFacultad = opciones;
opciones.map((maestro, index) => {
  
  maestroEncontrado = maestro.nombre;
  //console.log(facultadEncontrada.facultad_nombre);
   indexEncontrado = index;

 arregloMaestros[index] = maestroEncontrado;
 //arregloFacultad.push = <option key={indexEncontrado} value={indexEncontrado}>{facultadEncontrada}</option>;



})

return arregloMaestros;
 
 // return opcion;
};

const tontoarreglo_maestro = (arregloMaestros, index)=>{

  try{

     return <option value={arregloMaestros[index]}>{arregloMaestros[index]}</option>;

  
} catch{
  return <option value="0">...</option>;
}

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    arregloFacultad,
    arregloCarrera,
    arregloMateria,
    arregloMaestros,
    handleFocus,
    handleFocus_carrera,
    handleFocus_materia,
    handleFocus_maestro,
    handleChange,
    handleBlur,
    handleSubmit,

  
  } = useFormCalificaciones(initialForm, validationsForm,cargarOpcionesCombo, cargarOpcionesCombo_carrera,
    cargarOpcionesCombo_materia, cargarOpcionesCombo_maestro);

  return (
    <>
      <abbr onClick={handleShow} title="AgregarCalificacion" id="AgregarCalificacionModal"><a className="categoria" id="CerrarSesionCategoria"><img src={require('../../../recursos/images/icons/comment-add-solid-24.png')}/></a></abbr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={handleSubmit}>
            <div class="form" id="form">
                <h1>Agregar Calificación</h1>
                <br/>
                
                
              <div className="grupo">
                <h4>Facultad</h4>
                <select
                  class="categorias-select"
                  name="facultad"
                  onChange={handleChange}
                  id="menuEtiquetas" items={arregloFacultad} onFocus={handleFocus}
                >
                      {tontoarreglo(arregloFacultad,0)}
                      {tontoarreglo(arregloFacultad,1)}
                      {tontoarreglo(arregloFacultad,2)}
                </select>
              </div>
              <br />

              <div className="grupo">
                <h4>Carrera</h4>
                <select
                  class="categorias-select"
                  name="carrera"
                  onChange={handleChange}
                  id="menuEtiquetas" items={arregloCarrera} onFocus={handleFocus_carrera}
                >
                      {tontoarreglo_carrera(arregloCarrera,0)}
                      {tontoarreglo_carrera(arregloCarrera,1)}
                      {tontoarreglo_carrera(arregloCarrera,2)}
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
                  id="menuEtiquetas" items={arregloMateria} onFocus={handleFocus_materia}
                >
                      {tontoarreglo_materia(arregloMateria,0)}
                      {tontoarreglo_materia(arregloMateria,1)}
                      {tontoarreglo_materia(arregloMateria,2)}
                </select>

              </div>
              <br />



              <div className="grupo">
              <h4>Profesor</h4>
              <select class="categorias-select" name="profesor"
                  onChange={handleChange} id="menuEtiquetas" items={arregloMaestros} onFocus={handleFocus_maestro}> 
                      {tontoarreglo_maestro(arregloMaestros,0)}
                      {tontoarreglo_maestro(arregloMaestros,1)}
                      {tontoarreglo_maestro(arregloMaestros,2)}
                                    
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
            Agregar
          </Button>
            </div>
        </form>      



        </Modal.Body>
      </Modal>
    </>
  );
}
