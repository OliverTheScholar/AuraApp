var mongoose = require('mongoose');
var MONGO_URI = 'mongodb+srv://dbUser:oNdjy5efekWFw7Ri@cluster0.rinullf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI, {
    // sets the name of the DB that our collections are part of
    dbName: 'AuraDB'
})
    .then(function () { return console.log('Connected to Mongo DB.'); })
    .catch(function (err) { return console.log(err); });


var MedicationSchema = new mongoose.Schema({
    name: String,
    dosage: String,
    start_date: { type: Date, default: null }, // Optional, as not all medications have start and end dates
    end_date: { type: Date, default: null } // Optional
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