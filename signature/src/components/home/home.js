import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";


import "./style.css"
import CalificacionIteam from "./calificacionIteam";

const Home = () => {
  return (
    <>
      <NavBar />
      
    <main>
      <section className="contenedor">

        <div className="pregunta-fondoPerfil">
          <h3>Materias & Profesores</h3>
          <ListGroup as="ol">
            
          <CalificacionIteam/>
          <CalificacionIteam/>
          <CalificacionIteam/>
          <CalificacionIteam/>
          <CalificacionIteam/>
            
            
          </ListGroup>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
};

export default Home;
