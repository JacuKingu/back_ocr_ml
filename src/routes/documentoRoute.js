const express = require('express');
const { body, validationResult } = require('express-validator');
const documentoController = require('../controllers/comunicacionController');
const manejoErrores = require('../middlewares/manejoErrores');

const router = express.Router();

// Middleware de validación para documentos
const validarDocumento = [
  body('estado_documento').notEmpty().withMessage('El estado del documento es requerido'),
  body('resultado_analisis_ml').notEmpty().withMessage('El resultado del análisis es requerido'),
  body('comentarios').optional().isString().withMessage('Los comentarios deben ser una cadena de texto'),
  body('fecha').optional().isISO8601().toDate().withMessage('La fecha debe tener el formato ISO8601 (YYYY-MM-DD)'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Ruta para obtener todos los documentos
router.get('/documentos', documentoController.getAllDocumentos);

// Ruta para crear un nuevo documento
router.post('/documentos', validarDocumento, documentoController.createDocumento);

// Ruta para obtener un documento por su ID
router.get('/documentos/:id', documentoController.getDocumentoById);

// Ruta para actualizar un documento por su ID
router.put('/documentos/:id', validarDocumento, documentoController.updateDocumento);

// Ruta para eliminar un documento por su ID
router.delete('/documentos/:id', documentoController.deleteDocumento);

// Middleware de manejo de errores
router.use(manejoErrores);

module.exports = router;
