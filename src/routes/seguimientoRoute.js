const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const seguimientoBecasController = require('../controllers/seguimientoBecasController');

// Middleware de validación para la creación de un nuevo seguimiento de beca
const validateSeguimientoBeca = [
  body('idSolicitud').isNumeric().withMessage('El ID de solicitud debe ser un número entero'),
  body('fechaInicio').isISO8601().toDate().withMessage('La fecha de inicio debe tener formato ISO8601'),
  body('fechaFin').isISO8601().toDate().withMessage('La fecha de fin debe tener formato ISO8601'),
  body('estadoActual').isString().withMessage('El estado actual debe ser una cadena de texto'),
  body('comentarios').optional().isString().withMessage('Los comentarios deben ser una cadena de texto'),
];

// Ruta para crear un nuevo seguimiento de beca
router.post('/seguimientos-becas', validateSeguimientoBeca, seguimientoBecasController.createSeguimientoBeca);

// Ruta para obtener todos los seguimientos de becas
router.get('/seguimientos-becas', seguimientoBecasController.getAllSeguimientosBecas);

// Ruta para obtener un seguimiento de beca por su ID
router.get('/seguimientos-becas/:id', seguimientoBecasController.getSeguimientoBecaById);

// Ruta para eliminar un seguimiento de beca por su ID
router.delete('/seguimientos-becas/:id', seguimientoBecasController.deleteSeguimientoBecaById);

module.exports = router;
