const { Sequelize } = require('sequelize');

// Create a new Sequelize instance for SQL Server connection
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false, 
      trustServerCertificate: true 
    }
  }
});

module.exports = sequelize;
