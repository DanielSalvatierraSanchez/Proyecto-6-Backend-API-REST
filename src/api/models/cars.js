const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
    branch: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true }
    }
);

const Car = mongoose.model('cars', carsSchema, 'cars')

module.exports = Car;