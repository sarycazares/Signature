import React from "react";
import {Route, Routes, Navigate} from "react-router-dom" ;
import Login from "./components/login/login";
import Home from "./components/home/home";
import usuario from "./components/login/modales/";
import Perfil from "./components/perfil/perfil";
import PerfilCalificación from "./components/perfilCalificacion/perfilCalificacion";
import UsuarioCreate from "./components/funciones/usuario/crear";
import Admin from "./components/admin/inicioAdmin";
import Reportes from "./components/reportes/reportes"


let accessToken;
const initialSession = false;

function App(){

    var session = initialSession;
    //sessionStorage.setItem("usuario", "tokenres");
    //sessionStorage.setItem("token", "05145");
   // accessToken = sessionStorage.removeItem ("token");
    accessToken = sessionStorage.getItem ("token");

    if (accessToken == null) {
        session = false;
      } else {
        session = true;
      }

    return (

    
        <Routes>
          
          <Route exact path="/home" element={session ? <Home/> : <Navigate to="/"/>} />
          <Route exact path="/perfil" element={session ? <Perfil/> : <Navigate to="/"/>} />
          <Route exact path="/perfilcalificacion" element={session ? <PerfilCalificación/> : <Navigate to="/"/>}/>
          <Route exact path="/admin" element={session ? <Admin/> : <Navigate to="/"/>}/>
          <Route exact path="/reportes" element={session ? <Reportes/> : <Navigate to="/"/>}/>
          <Route exact path="/crear/usuario" element={<UsuarioCreate />} /> {/** agregar uno */}
          <Route exact path="/" element={<Login />} />
          </Routes>
   //enlaces para dirigir a un componente, lo que te va a pintar en pantalla
   //segun lo que se escriba en el buscador y segun la instancia que se ingrese sera la pantalla que aparecera

    );
        
    
}

export default App;