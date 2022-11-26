import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import Redirects from "../../hooks/Redirects";


import "./style.css"
import CalificacionIteam from "./calificacionIteam";

const Home = () => {

  
  const {
    irAdmin
  } = Redirects();
  

  return (
    <>
      <NavBar />
      
    <main>
      <section className="contenedor">

        <button onClick={irAdmin}></button>

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
