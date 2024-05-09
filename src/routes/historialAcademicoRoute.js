const express = require('express');
const router = express.Router();
const historialAcademicoController = require('../controllers/historialAcademicoController');
const { validateHistorialAcademico } = require('../middlewares/academicoMiddleware');

router.get('/historiales', historialAcademicoController.getAllHistorialesAcademicos);

router.get('/historiales/:id', historialAcademicoController.getHistorialAcademicoById);

router.post('/historiales', validateHistorialAcademico, historialAcademicoController.createHistorialAcademico);

router.put('/historiales/:id', validateHistorialAcademico, historialAcademicoController.updateHistorialAcademico);

router.delete('/historiales/:id', historialAcademicoController.deleteHistorialAcademico);

module.exports = router;
