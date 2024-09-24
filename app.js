
const express = require('express');
const bodyParser = require('body-parser');
const bloodBankRoutes = require('./routes/bloodBank');
const sequelize = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());

// Test database connection
sequelize.authenticate()
  .then(() => console.log('SQL Server connected'))
  .catch(err => console.log('Error: ' + err));


sequelize.sync();


app.use('/api/blood-banks', bloodBankRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
