const express = require('express');
const Patient = require('../models/patientModels')
const mongoose = require('mongoose')
const router = express.Router();

// retrieve list of patients
router.get('/home', async (req, res) => {
  // get patient list from mongo excluding meds + body temps
  Patient.find().select('-medications -body_temperatures').exec()
  .then(patients => {
      console.log(patients);
      res.status(200).send(patients);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err.message); 
  });
});


// retrieve individual patient
router.get('/patient', (req, res) => {
  const patientId = req.query.id;
  if (patientId) {
    Patient.findById(patientId)
    .then(patientData => {
      if (!patientData) {
        console.log('Patient not found');
      } else {
        console.log(patientData);
        res.status(200).send(patientData)
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err.message);
    });
  }
})

// modify individual patient (take medication, modify medication)
router.post('/patient/update', async (req, res) => {
  try {
    const patientId = req.query.id; 
    const updateData = req.body; 

    const updatedPatient = await Patient.findByIdAndUpdate(patientId, updateData, { new: true });
    
    if (!updatedPatient) {
      return res.status(404).send('Patient not found');
    }

    res.status(200).json(updatedPatient);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while updating the patient');
  }
});

router.post('/patient/recordtemperature', async (req, res) => {
  const { patientId, temperature } = req.body

  const newTemperatureReading = {
    _id: new mongoose.Types.ObjectId(), 
    date: new Date(), 
    temperature: temperature 
  };
  
  Patient.findByIdAndUpdate(
    patientId,
    { $push: { body_temperatures: newTemperatureReading } },
    { new: true, safe: true, upsert: true } // Options
  )
  .then(updatedDocument => {
    console.log("Updated document:", updatedDocument);
    res.status(200).json(updatedDocument)
  })
  .catch(err => {
    console.error("Error updating document:", err);
  });
})

module.exports = router