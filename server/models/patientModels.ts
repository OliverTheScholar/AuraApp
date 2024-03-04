const mongoose = require('mongoose');

const MONGO_URI = 'YOUR_URI_HERE';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'AuraDB'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const MedicationSchema = new mongoose.Schema({
    name: String,
    dosage: String,
    start_date: { type: Date, default: null }, // Optional, as not all medications have start and end dates
    end_date: { type: Date, default: null } // Optional
  });
  
  const BodyTemperatureSchema = new mongoose.Schema({
    date: Date,
    temperature: Number
  });
  
  const PatientSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    first_name: String,
    age: Number,
    height: Number,
    weight: Number,
    gender: String,
    medications: [MedicationSchema],
    body_temperatures: [BodyTemperatureSchema]
  });
  
  const Patient = mongoose.model('Patient', PatientSchema);
  
  module.exports = Patient;