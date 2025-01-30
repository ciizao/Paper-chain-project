const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configurar la conexión a PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Nombre de la base de datos
  process.env.DB_USER,      // Usuario
  process.env.DB_PASSWORD,  // Contraseña
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',    // Usar PostgreSQL
    logging: false,         // Desactivar logs de Sequelize
  }
);

module.exports = sequelize;
