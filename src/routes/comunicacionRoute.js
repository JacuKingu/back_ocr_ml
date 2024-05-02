const express = require('express');
const router = express.Router();
const comunicacionController = require('../controllers/comunicacionController');
const { body, validationResult } = require('express-validator');
const manejoErrores = require('../middlewares/manejoErrores');

// Middleware de validación para crear una nueva comunicación
const validarNuevaComunicacion = [
  body('idUsuario').isNumeric().withMessage('El ID del usuario debe ser un número'),
  body('mensaje').notEmpty().withMessage('El mensaje es requerido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// Ruta para obtener todas las comunicaciones de un usuario
router.get('/comunicaciones/:idUsuario', comunicacionController.getComunicacionesUsuario);

// Ruta para crear una nueva comunicación de usuario
router.post('/comunicaciones', validarNuevaComunicacion, comunicacionController.createComunicacionUsuario);

// Ruta para eliminar una comunicación de usuario por su ID
router.delete('/comunicaciones/:idComunicacion', comunicacionController.deleteComunicacionUsuario);

// Middleware de manejo de errores
router.use(manejoErrores);

module.exports = router;
