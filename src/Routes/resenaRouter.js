const express = require('express');
const router = express.Router();

const resenaController = require('../Controllers/resenaController');

router.post("/resena", resenaController.resena_create);

//router.put("/student/update", student_controller.student_update);
//router.delete("/student/:id", student_controller.student_delete);
//router.delete("/student", student_controller.student_delete);

//router.get("/student", student_controller.student_getAll);
//router.get("/student/:id", student_controller.student_getById);


module.exports = router;