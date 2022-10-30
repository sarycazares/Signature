const regEmail = new RegExp(
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9_.+-]+$/g
);

const regContraseña = new RegExp(
  /^((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})).{8}$/g
);

const regContraseñaConfirmada = new RegExp(
  /^((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})).{8}$/g
);

const regUsuario = new RegExp(/^(?=.*[a-zA-Z0-9]).{9,15}$/g);

export default { regEmail, regContraseña, regUsuario , regContraseñaConfirmada};
