const express = require('express');
const router = express.Router();

const resenaController = require('../Controllers/comentarioReporteController');
const resmateriaController = require('../Controllers/comentarioReporteController');


router.post("/resena", resenaController.resena_promedio);

router.post("/resena", resmateriaController.materia_promedio);

module.exports = router;