const HistorialAcceso = require('../models/historialAccesoModel');
const validateHistorialAcceso = require('../middlewares/')

// Crear un nuevo registro en el historial de acceso
exports.createHistorialAcceso = async (req, res) => {
  const { id_usuario, tipo_accion } = req.body;

  try {
    const nuevoHistorial = new HistorialAcceso({
      id_usuario,
      tipo_accion,
    });
    await nuevoHistorial.save();
    res.status(201).json({ message: 'Historial de acceso creado correctamente', historial: nuevoHistorial });
  } catch (error) {
    console.error('Error al crear historial de acceso:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
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
