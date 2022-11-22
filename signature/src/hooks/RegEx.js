const regMatricula = new RegExp(/^[0-9].{6}$/);

const regFacultad = new RegExp(/^[a-zA-Z]+$/);

const regCarrera =  new RegExp(/^[a-zA-Z]+$/);

const regSemestre = new RegExp(/^[0-9].{9,15}$/g);

const regUniversidad = new RegExp(/^[a-zA-Z]+$/);

const regMateria = new RegExp(/^[a-zA-Z]+$/);

const regProfesor = new RegExp(/^[a-zA-Z]+$/);

const regDescripcion = new RegExp(/^[a-zA-Z]+$/);

const regCalificacion = new RegExp(/^[0-9]$/g);

const regNombre = new RegExp(
  /^[a-zA-Z]+$/g
);

const regContraseña = new RegExp(
  /^((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})).{8}$/g
);

const regContraseñaConfirmada = new RegExp(
  /^((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})).{8}$/g
);

const regUsuario = new RegExp(/^(?=.*[a-zA-Z0-9]).{9,15}$/g);

export default { regMatricula,regProfesor, regCalificacion,regDescripcion, regMateria, regFacultad, regUniversidad, regCarrera, regSemestre, regContraseña, regUsuario , regNombre, regContraseñaConfirmada};
