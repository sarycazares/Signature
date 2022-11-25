import React, { useState } from "react";
import ModalModificarPerfil from '../../perfil/modales/modalmodificarPerfil'
import {updateUsuario } from "../../../services/UsuarioService";

const usuarioInit = {
    color: "",
    matricula: "",
    usuario: "",
    facultad: "",
    carrera: "",
    semestre: "",
    contraseña: "",
    confirmarContraseña: "",
  };

export default function UsuarioModificar(){
    const [usuario, setUsuario] = useState(usuarioInit);
    const modificar = async(event)=>{
        event.preventDefault();
        
        const res = await updateUsuario(usuario);
        console.log(res);
    };

    const handleChange = (event) =>{
        const{name, value} = event.target;

        setUsuario({
            ...usuario,
            [name]: value,
        });
    };

    return(
        <ModalModificarPerfil
        titulo={"Modificar usuario"}
        handleChange={handleChange}
        handleSubmit={modificar}
        usuario={usuario}
        />
    );
  }