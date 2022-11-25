import React from "react";
import {Route, Routes} from "react-router-dom" ;
import Login from "./components/login/login";
import Home from "./components/home/home";
import usuario from "./components/login/modales/";
import Perfil from "./components/perfil/perfil";
import PerfilCalificación from "./components/perfilCalificacion/perfilCalificacion";
import UsuarioCreate from "./components/funciones/usuario/crear";
import Admin from "./components/admin/inicioAdmin";


function App(){

    return (

    
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/perfilcalificacion" element={<PerfilCalificación />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/crear/usuario" element={<UsuarioCreate />} /> {/** agregar uno */}
          </Routes>
   //enlaces para dirigir a un componente, lo que te va a pintar en pantalla
   //segun lo que se escriba en el buscador y segun la instancia que se ingrese sera la pantalla que aparecera

    );
        
    
}

export default App;