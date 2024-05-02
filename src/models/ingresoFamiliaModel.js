const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Configura tu conexión a la base de datos

const IngresoFamiliar = sequelize.define('IngresoFamiliares', {
  idIngresoFamiliar: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ingresosMensuales: {
    type: DataTypes.DECIMAL(10, 2)
  },
  numMiembros_familia: {
    type: DataTypes.INTEGER
  }
});

module.exports = IngresoFamiliar;
