import React, { useState } from "react";
import ModalAgregarMateria from '../../admin/modales/materia/modalAgregarMateria';
import { createMateria } from "../../../services/materiaService";

const materiaInit = {
    facultad: "",
    carrera: "",
    semestre: "",
    materia: "",
  };

  export default function MateriaCreate() {
    const [materia, setMateria] = useState(materiaInit);
    const guardar = async (event) => {
      event.preventDefault();
  
      const res = await createMateria(materia);
      console.log(res);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setMateria({
        ...materia,
        [name]: value,
      });
    };

    return (
    <ModalAgregarMateria
      titulo={"Crear materia"}
      handleChange={handleChange}
      handleSubmit={guardar}
      materia={materia}
    />
  );
}