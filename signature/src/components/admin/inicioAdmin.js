import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import "./style.css";
import ModalAgregarCarrera from "./modales/carrera/modalAgregarCarrera";
import ModalAgregarFacultad from "./modales/facultad/modalAgregarFacultad";
import ModalAgregarMateria from "./modales/materia/modalAgregarMateria";
import ModalAgregarProfesor from "./modales/profesor/modalAgregarProfesor";

import ModalModificarCarrera from "./modales/carrera/modalModificarCarrera";
import ModalModificarFacultad from "./modales/facultad/modalModificarFacultad";
import ModalModificarMateria from "./modales/materia/modalModificarMateria";
import ModalModificarProfesor from "./modales/profesor/modalModificarProfesor";

import ModalEliminarCarrera from "./modales/carrera/modalEliminarCarrera";
import ModalEliminarFacultad from "./modales/facultad/modalEliminarFacultad";
import ModalEliminarMateria from "./modales/materia/modalEliminarMateria";
import ModalEliminarProfesor from "./modales/profesor/modalEliminarProfesor";

const Admin = () => {
  return (
    <>
      <NavBar />

      <main>
        <section className="contenedor">
          <div className="pregunta-fondoPerfil">
            <h2 className="Admin">Administrador</h2>

            <h2 className="AdminTitle">Facultad</h2>
            <div className="ContenedorAdmin">
              <br />
              <div className="BotonesCalificacion">
                <ModalAgregarFacultad />
                <ModalModificarFacultad />
                <ModalEliminarFacultad />
                <br /> <br />
              </div>
            </div>

            <h2 className="AdminTitle">Carrera</h2>
            <div className="ContenedorAdmin">
              <br />

              <div className="BotonesCalificacion">
                <ModalAgregarCarrera />
                <ModalModificarCarrera />
                <ModalEliminarCarrera />
                <br /> <br />
              </div>
            </div>

            <h2 className="AdminTitle">Materia</h2>
            <div className="ContenedorAdmin">
              <br />

              <div className="BotonesCalificacion">
                <ModalAgregarMateria />
                <ModalModificarMateria />
                <ModalEliminarMateria />
                <br /> <br />
              </div>
            </div>

            <h2 className="AdminTitle">Profesor</h2>
            <div className="ContenedorAdmin">
              <br />

              <div className="BotonesCalificacion">
                <ModalAgregarProfesor />
                <ModalModificarProfesor />
                <ModalEliminarProfesor />
                <br /> <br />
              </div>
            </div>
            <br />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Admin;
