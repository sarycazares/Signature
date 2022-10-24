import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import "../../css/index.css"
import Footer from '../footer/footer'
import ModalRegistro from './modales/modalRegistro'
import ModalIniciarSesion from './modales/modalIniciarSesion'

const Login = () => {
  return (
    
    <>
    <header className="Header">
      <nav className="NavBarLogin">
        <div class="botonesInicio">
          <ModalRegistro/>
          <ModalIniciarSesion/>
        </div>
        <br />
        <br />
      </nav>

      <section className="textos-header">
        <h2>Signature</h2>
        <h3>Califica tus materias</h3>
      </section>

      <div style={{height: "150px", overflow: "hidden"}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M-49.66,-34.02 C239.84,155.44 240.40,156.42 551.91,-34.02 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#ebebeb"}}></path></svg></div>
      

      <Footer/>
    </header>

    
    </>
  );
};

export default Login;
