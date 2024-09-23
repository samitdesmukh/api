const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: '8080',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false, 
      trustServerCertificate: true 
    }
  }
});


module.exports = sequelize;
