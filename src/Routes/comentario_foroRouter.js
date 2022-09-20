const express = require('express');
const router = express.Router();

const comentario_foroController = require('../Controllers/com_foroController');

router.post("/comforo", comentario_foroController.conentarioForo_create);

//router.put("/student/update", student_controller.student_update);
//router.delete("/student/:id", student_controller.student_delete);
//router.delete("/student", student_controller.student_delete);

//router.get("/student", student_controller.student_getAll);
//router.get("/student/:id", student_controller.student_getById);


module.exports = router;