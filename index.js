require('dotenv').config()
const express = require('express')

const { connectDB } = require('./src/config/db')

const playersRouter = require('./src/api/routes/players')
const carsRouter = require('./src/api/routes/cars')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/players', playersRouter);
app.use('/api/v1/cars', carsRouter);

app.use('*', (req, res, next) => {
    return res.status(404).json('✅ Route not found')
})

app.listen(3000, () => {
    console.log(`✅ Servidor 🚀 http://localhost:3000`)
});
