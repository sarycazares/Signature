import React, { useState } from "react";
import ModalIniciarSesion from '../../login/modales/modalIniciarSesion';
import { logUsuario } from "../../../services/UsuarioService";

const usuarioInit = {
    usuario: "",
    contraseña: "",
  };

  export default function UsuarioLogin() {
    const [usuario, setUsuario] = useState(usuarioInit);
    const Ingresar = async (event) => {
      event.preventDefault();
  console.log("entra a login_us");
      const res = await logUsuario(usuario);
      console.log(res);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setUsuario({
        ...usuario,
        [name]: value,
      });
    };

    return (
    <ModalIniciarSesion
      titulo={"Login usuario"}
      handleChange={handleChange}
      handleSubmitLog={Ingresar}
      usuario={usuario}
    />
  );
}