/*import React, { useEffect, useState } from "react";
import {getUsuarios} from '../../../services/UsuarioService';

export default function Usuarios(props) {

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getUsuarios();
      setUsuario(res);
    }
    fetchData();
    
  }, [])

  return <div>Usuarios</div>;
}
*/