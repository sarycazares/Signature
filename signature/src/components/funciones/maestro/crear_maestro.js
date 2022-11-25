import React, { useState } from "react";
import ModalAgregarProfesor from '../../admin/modales/profesor/modalAgregarProfesor';
import { createMaestro } from "../../../services/maestroService";

const maestroInit = {
    facultad: "",
    profesor: "",
  };

  export default function MaestroCreate() {
    const [maestro, setMaestro] = useState(maestroInit);
    const guardar = async (event) => {
      event.preventDefault();
  
      const res = await createMaestro(maestro);
      console.log(res);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setMaestro({
        ...maestro,
        [name]: value,
      });
    };

    return (
    <ModalAgregarProfesor
      titulo={"Crear maestro"}
      handleChange={handleChange}
      handleSubmit={guardar}
      maestro={maestro}
    />
  );
}
