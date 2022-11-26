const express = require('express');
const router = express.Router();

const facu_controller = require('../Controllers/facultadController');

router.post("/facultad", facu_controller.facultad_create);

router.put("/facultad/update", facu_controller.facultad_update2);
//router.delete("/student/:id", student_controller.student_delete);
//router.delete("/student", student_controller.student_delete);

router.get("/facultad", facu_controller.facultad_getAll);
router.get("/facultad/name", facu_controller.facultad_getByName);
//router.get("/student/:id", student_controller.student_getById);


module.exports = router;