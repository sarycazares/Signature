import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom" ;
import Login from "./components/login/login";
import Home from "./components/home/home";
import Perfil from "./components/perfil/perfil";
import PerfilCalificación from "./components/perfilCalificacion/perfilCalificacion";


function App(){

    return (

        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route exact path="/perfilcalificacion" element={<PerfilCalificación />} />
          </Routes>
        </BrowserRouter>

    );


}

export default App;