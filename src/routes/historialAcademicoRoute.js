const express = require('express');
const router = express.Router();
const historialAcademicoController = require('../controllers/historialAcademicoController');
const { validateHistorialAcademico } = require('../middlewares/academicoMiddleware');
const manejoErrores = require('../middlewares/manejoErrores');

router.get('/historiales', historialAcademicoController.getAllHistorialesAcademicos);

router.get('/historiales/:id', historialAcademicoController.getHistorialAcademicoById);

router.post('/historiales', validateHistorialAcademico, historialAcademicoController.createHistorialAcademico);

router.put('/historiales/:id', validateHistorialAcademico, historialAcademicoController.updateHistorialAcademico);

router.delete('/historiales/:id', historialAcademicoController.deleteHistorialAcademico);

// Middleware de manejo de errores
router.use(manejoErrores);

module.exports = router;
