const express = require('express');
const router = express.Router();
const seguimientoBecaController = require('../controllers/seguimientoBecaController');
const { body, validationResult } = require('express-validator');

// Middleware de validación para crear un nuevo seguimiento de beca
const validarNuevoSeguimiento = [
  body('idSolicitud').isNumeric().withMessage('El ID de la solicitud debe ser un número entero'),
  body('fechaInicio').isISO8601().toDate().withMessage('La fecha de inicio debe tener el formato ISO8601'),
  body('fechaFin').isISO8601().toDate().withMessage('La fecha de fin debe tener el formato ISO8601'),
  body('estadoActual').isString().withMessage('El estado actual debe ser una cadena de texto'),
  body('comentarios').optional().isString().withMessage('Los comentarios deben ser una cadena de texto'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Ruta para obtener todos los seguimientos de becas
router.get('/seguimientos', seguimientoBecaController.getAllSeguimientosBecas);

// Ruta para crear un nuevo seguimiento de beca
router.post('/seguimientos', validarNuevoSeguimiento, seguimientoBecaController.createSeguimientoBeca);

// Ruta para obtener un seguimiento de beca por su ID
router.get('/seguimientos/:id', seguimientoBecaController.getSeguimientoBecaById);

// Ruta para eliminar un seguimiento de beca por su ID
router.delete('/seguimientos/:id', seguimientoBecaController.deleteSeguimientoBecaById);

module.exports = router;
