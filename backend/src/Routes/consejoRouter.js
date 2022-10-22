const express = require('express');
const router = express.Router();

const consejo_controller = require('../Controllers/consejoController');

router.post("/consejo", consejo_controller.consejo_create);

//router.put("/student/update", student_controller.student_update);
//router.delete("/student/:id", student_controller.student_delete);
//router.delete("/student", student_controller.student_delete);

//router.get("/student", student_controller.student_getAll);
//router.get("/student/:id", student_controller.student_getById);


module.exports = router;