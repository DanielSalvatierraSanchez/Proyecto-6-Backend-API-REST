const { postCar, getCars, getCarById, getCarsByBranch, getCarsByColor, getCarsByModel, getCarsByPrice, updateCar, deleteCar, deleteCarOfPlayer } = require('../controllers/cars');

const carsRouter = require('express').Router();

carsRouter.post('/register', postCar);
carsRouter.get('/price/:price', getCarsByPrice);
carsRouter.get('/color/:color', getCarsByColor);
carsRouter.get('/model/:model', getCarsByModel);
carsRouter.get('/branch/:branch', getCarsByBranch);
carsRouter.get('/id/:id', getCarById);
carsRouter.get('/', getCars);
carsRouter.put('/:id', updateCar);
carsRouter.delete('/:id', deleteCar);
carsRouter.delete('/car/:id', deleteCarOfPlayer);

module.exports = carsRouter;