import React, { useState } from "react";
import ModalAgregarCarrera from '../../admin/modales/carrera/modalAgregarCarrera';
import { createCarrera } from "../../../services/carreraService";

const carreraInit = {
    facultad: "",
    carrera: "",
  };

  
export default function CarreraCreate() {
    const [carrera, setCarrera] = useState(carreraInit);
    const guardar = async (event) => {
      event.preventDefault();
  
      const res = await createCarrera(carrera);
      console.log(res);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setCarrera({
        ...carrera,
        [name]: value,
      });
    };

    return (
    <ModalAgregarCarrera
      titulo={"Crear carrera"}
      handleChange={handleChange}
      handleSubmit={guardar}
      carrera={carrera}
    />
  );
}