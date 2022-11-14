const regMatricula = new RegExp(/^[0-9]+$/);

const regFacultad = new RegExp(/^[a-zA-Z]+$/);

const regCarrera =  new RegExp(/^[a-zA-Z]+$/);

const regSemestre = new RegExp(/^[0-9].{9,15}$/g);

const regContraseña = new RegExp(
  /^((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})).{8}$/g
);

const regContraseñaConfirmada = new RegExp(
  /^((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})).{8}$/g
);

const regUsuario = new RegExp(/^(?=.*[a-zA-Z0-9]).{9,15}$/g);

export default { regMatricula, regFacultad, regCarrera, regSemestre, regContraseña, regUsuario , regContraseñaConfirmada};
