
const express = require('express');
const router = express.Router();
const usuario_copy = require('../Models/usuarioSchema');
const us_controller = require('../Controllers/usuarioController');


router.post("/usuario", us_controller.usuario_create);
router.put("/usuario/modificar", us_controller.usuario_update);
router.post("/usuario/login", us_controller.usuario_login);
//router.put("/student/update", student_controller.student_update);
//router.delete("/student/:id", student_controller.student_delete);
//router.delete("/student", student_controller.student_delete);

//router.get("/student", student_controller.student_getAll);
//router.get("/student/:id", student_controller.student_getById);


module.exports = router;