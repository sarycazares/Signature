import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import ModalCerrarSesion from './modales/modalCerrarSesion'
import ModalAgregarCalificacion from './modales/modalAgregarCalificacion'
import Perfil from '../perfil/perfil'
import { Link } from "react-router-dom";

let accessUsuario;

const NavBar = () => {

  accessUsuario = sessionStorage.getItem ("usuario");

  return (
    
    <>

<div className="loader"></div>

<header className="NavBar">
    <nav className="nav-menu">
        <div className="usuariobienvenida">
        <Link to="/perfil" className="">
            <img className="imagen-perfilusuario" src={require('../../recursos/images/icons/user-solid-60.png')}  style={{backgroundColor: '#49408C'}}width="60" height="60"/>
            <h1 className="bienvenida_usuario"> Bienvenido</h1>
            <h1 className="nombre_usuario" id="nombre_usuario">{accessUsuario}</h1> 
        </Link></div>
        
        <ModalAgregarCalificacion/>
        <b href="#" className="categoriaB"> | </b>
        <abbr title="Perfil"><Link to="/perfil"className="categoria" id="PerfilCategoria"><img src={require('../../recursos/images/icons/face-regular-24.png')}/></Link></abbr>
        <b href="#" className="categoriaB"> | </b>
        <ModalCerrarSesion/>
    </nav>

    <nav className="imagen-WooHoo">            
    <Link to="/home" className="imagen-logo" id="imagen-logo"><img className="imagen-logo" id="logo-principal" src={require('../../recursos/images/theUniverse_icon.png')}/></Link>
    </nav>    

    <div className="barraNavBar"></div> 


</header>

      <br />
      <br />
      <br />
    
    
    </>
    
  );
};

export default NavBar;
