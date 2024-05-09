const { } = require('../models/historialAccesoModel');
const { validationResult } = require('express-validator');
const {validateHistorialAcceso} = require('../middlewares/accesoMiddleware')

// Crear un nuevo registro en el historial de acceso
exports.createHistorialAcceso = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Obtener los datos del cuerpo de la solicitud
  const { id_usuario, tipo_accion } = req.body;

  try {
    // Crear el nuevo registro en el historial de acceso
    const nuevoHistorial = await HistorialAcceso.create({
      id_usuario,
      tipo_accion
    });

    // Enviar la respuesta con el nuevo registro creado
    res.status(201).json({ message: 'Registro creado correctamente', historial: nuevoHistorial });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el registro en el historial de acceso' });
  }
};

// Obtener todos los registros del historial de acceso
exports.getAllHistorialAcceso = async (req, res) => {
  try {
    const historiales = await HistorialAcceso.find();
    res.status(200).json(historiales);
  } catch (error) {
    console.error('Error al obtener historiales de acceso:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un registro del historial de acceso por su ID
exports.getHistorialAccesoById = async (req, res) => {
  const { id } = req.params;

  try {
    const historial = await HistorialAcceso.findById(id);
    if (!historial) {
      res.status(404).json({ error: 'Historial de acceso no encontrado' });
      return;
    }
    res.status(200).json(historial);
  } catch (error) {
    console.error('Error al obtener historial de acceso por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Eliminar un registro del historial de acceso por su ID
exports.deleteHistorialAccesoById = async (req, res) => {
  const { id } = req.params;

  try {
    const historialEliminado = await HistorialAcceso.findByIdAndDelete(id);
    if (!historialEliminado) {
      res.status(404).json({ error: 'Historial de acceso no encontrado' });
      return;
    }
    res.status(200).json({ message: 'Historial de acceso eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar historial de acceso por ID:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
