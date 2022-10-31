import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

import "./style.css"

const Home = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
    <main>
      <section className="contenedor">
        <h1>Home</h1>

        <div className="pregunta-fondoPerfil">
          <h3>Materias & Profesores</h3>
          <ListGroup as="ol">
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Leslie Sarahy Cazares Mendoza</div>
                Programación Avanzada
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
              <abbr  title="Perfil Profesor" id="PerfilProfesor"><Link to="/perfilcalificacion"  className="categoriaPC" id="PerfilProfesorA"><img src={require('../../recursos/images/icons/comment-check-solid-24.png')}/></Link></abbr>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Bryan Sebastian Nava Torres</div>
                Dibujo
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
              <abbr  title="Perfil Profesor" id="PerfilProfesor"><Link to="/perfilcalificacion"  className="categoriaPC" id="PerfilProfesorA"><img src={require('../../recursos/images/icons/comment-check-solid-24.png')}/></Link></abbr>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Irma Jetzabel Gonzalez Toledo</div>
                Matemáticas Para Videojuegos I
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
              <abbr  title="Perfil Profesor" id="PerfilProfesor"><Link to="/perfilcalificacion"  className="categoriaPC" id="PerfilProfesorA"><img src={require('../../recursos/images/icons/comment-check-solid-24.png')}/></Link></abbr>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Carlos Daniel Gonzalez Navarrete</div>
                Efectos Visuales II
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
              <abbr  title="Perfil Profesor" id="PerfilProfesor"><Link to="/perfilcalificacion"  className="categoriaPC" id="PerfilProfesorA"><img src={require('../../recursos/images/icons/comment-check-solid-24.png')}/></Link></abbr>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Alejandro Bazaldua Gomez</div>
                Animación Tradicional
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
              <abbr  title="Perfil Profesor" id="PerfilProfesor"><Link to="/perfilcalificacion"  className="categoriaPC" id="PerfilProfesorA"><img src={require('../../recursos/images/icons/comment-check-solid-24.png')}/></Link></abbr>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
};

export default Home;
