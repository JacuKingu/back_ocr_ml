const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database'); // Importar la conexión a la base de datos

const Roles = sequelize.define('Roles', {
  idRol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  nombre_rol: {
    type: DataTypes.STRING(20),
    unique: true,
  },
});

module.exports = Roles;
