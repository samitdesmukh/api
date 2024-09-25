const express = require('express');
const router = express.Router();
const BloodBank = require('../models/BloodBank');

// Create a new blood bank
router.post('/create', async (req, res) => {
  const {
    name, licence, address, email, password, phone, altPhone, profileImage, openTime, closeTime, others
  } = req.body;

  try {
    let bloodBank = await BloodBank.findOne({ where: { email } });

    if (bloodBank) {
      return res.status(400).json({ msg: 'Blood bank already exists' });
    }

    bloodBank = await BloodBank.create({
      name, licence, address, email, password, phone, altPhone, profileImage, openTime, closeTime, others
    });

    res.status(201).json({ msg: 'Blood bank created successfully', bloodBank });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all blood banks
router.get('/', async (req, res) => {
  try {
    const bloodBanks = await BloodBank.findAll();
    res.json(bloodBanks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update a blood bank by ID
router.put('/update/:id', async (req, res) => {
  const {
    name, licence, address, phone, altPhone, profileImage, openTime, closeTime, others
  } = req.body;

  try {
    let bloodBank = await BloodBank.findByPk(req.params.id);

    if (!bloodBank) {
      return res.status(404).json({ msg: 'Blood bank not found' });
    }

    bloodBank.name = name;
    bloodBank.licence = licence;
    bloodBank.address = address;
    bloodBank.phone = phone;
    bloodBank.altPhone = altPhone;
    bloodBank.profileImage = profileImage;
    bloodBank.openTime = openTime;
    bloodBank.closeTime = closeTime;
    bloodBank.others = others;

    await bloodBank.save();
    res.json(bloodBank);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

