import React, { useState } from "react";
import ModalAgregarFacultad from '../../admin/modales/facultad/modalAgregarFacultad';
import { createFacultad } from "../../../services/facultadService";

const facultadInit = {
    nombre: "",
  };

export default function facultadCreate() {
    const [facultad, setFacultad] = useState(facultadInit);
    const agregar = async (event) => {
      event.preventDefault();
  
      const res = await createFacultad(facultad);
      console.log(res);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFacultad({
        ...facultad,
        [name]: value,
      });
    };

    return (
    <ModalAgregarFacultad
      titulo={"Crear facultad"}
      handleChange={handleChange}
      handleSubmit={agregar}
      facultad={facultad}
    />
  );
}