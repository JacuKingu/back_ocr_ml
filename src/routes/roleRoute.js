const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');
const { body, validationResult } = require('express-validator');
const { validarRol } = require('../middlewares/rolMiddleware')

// Rutas para los roles
router.post('/roles', validarRol, rolesController.createRol);
router.get('/roles', rolesController.getAllRoles);
router.get('/roles/:id', rolesController.getRolById);
router.delete('/roles/:id', rolesController.deleteRolById);

module.exports = router;
