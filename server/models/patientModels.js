var mongoose = require('mongoose');
require('dotenv').config(); 
var MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
    dbName: 'AuraDB'
})
    .then(function () { return console.log('Connected to Mongo DB.'); })
    .catch(function (err) { return console.log(err); });


var MedicationSchema = new mongoose.Schema({
    name: String,
    dosage: String,
    start_date: { type: Date, default: null }, 
    end_date: { type: Date, default: null } 
});
var BodyTemperatureSchema = new mongoose.Schema({
    date: Date,
    temperature: Number
});
var PatientSchema = new mongoose.Schema({
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
var Patient = mongoose.model('Patient', PatientSchema);

module.exports = Patient;