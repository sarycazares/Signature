const express = require('express');
const router = express.Router();

const carrera_controller = require('../Controllers/carreraController');

router.post("/carrera", carrera_controller.carrera_create);

//router.put("/student/update", student_controller.student_update);
//router.delete("/student/:id", student_controller.student_delete);
//router.delete("/student", student_controller.student_delete);

router.get("/carrera", carrera_controller.carrera_getAll);
//router.get("/student/:id", student_controller.student_getById);


module.exports = router;