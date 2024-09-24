const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcryptjs');

// Blood Bank Model
const BloodBank = sequelize.define('BloodBank', {
  name: { type: DataTypes.STRING, allowNull: false },
  licence: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  altPhone: { type: DataTypes.STRING },
  profileImage: { type: DataTypes.STRING }, 
  openTime: { type: DataTypes.STRING, allowNull: false },
  closeTime: { type: DataTypes.STRING, allowNull: false },
  others: { type: DataTypes.TEXT }
});

// Encrypt password before saving
BloodBank.beforeCreate(async (bloodBank) => {
  const salt = await bcrypt.genSalt(10);
  bloodBank.password = await bcrypt.hash(bloodBank.password, salt);
});

module.exports = BloodBank;
