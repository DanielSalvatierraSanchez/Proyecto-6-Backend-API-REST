const Car = require('../models/cars')

const postCar = async (req, res, next) => {
    try {
        const { model } = req.body;
        const carRepeated = await Car.findOne({ model });
        if (carRepeated) {
            return res.status(400).json('⛔ El coche ya existe');
        }
        const newCar = new Car(req.body);
        const carSaved = await newCar.save();
        return res.status(201).json(carSaved);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en postCar')
    }
}

const getCars = async (req, res, next) => {
    try {
        const allCars = await Car.find()
        if (!allCars.length) {
            return res.status(404).json('⛔ No existen coches');
        }
        return res.status(200).json(allCars)
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getCars')
    }
}

const getCarById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const carById = await Car.findById(id);
        if (!carById) {
            return res.status(404).json('⛔ No existe ese ID');
        }
        return res.status(200).json(carById);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getCarById');
    }
};

const getCarsByBranch = async (req, res, next) => {
    try {
        const { branch } = req.params
        const carsByBranch = await Car.find({ branch: new RegExp(branch, 'i') })
        if (!carsByBranch.length) {
            return res.status(404).json('⛔ No existe esa marca de coches');
        }
        return res.status(200).json(carsByBranch)
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getCarsByBranch')
    }
}

const getCarsByModel = async (req, res, next) => {
    try {
        const { model } = req.params
        const carsByModel = await Car.find({ model: new RegExp(model, 'i') })
        if (!carsByModel.length) {
            return res.status(404).json('⛔ No existe ese modelo de coche');
        }
        return res.status(200).json(carsByModel)
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getCarsByModel')
    }
}

const getCarsByColor = async (req, res, next) => {
    try {
        const { color } = req.params
        const carsByColor = await Car.find({ color: new RegExp(color, 'i') })
        if (!carsByColor.length) {
            return res.status(404).json('⛔ No hay ningun coche con ese color');
        }
        return res.status(200).json(carsByColor)
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getCarsByColor')
    }
}

const getCarsByPrice = async (req, res, next) => {
    try {
        const { price } = req.params
        const carsByPrice = await Car.find({ price: { $gte: price } })
        if (!carsByPrice.length) {
            return res.status(404).json('⛔ No hay ningun coche con ese precio');
        }
        return res.status(200).json(carsByPrice)
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getCarsByPrice')
    }
}

const updateCar = async (req, res, next) => {
    try {
        const { id } = req.params
        const carModify = new Car(req.body)
        carModify._id = id
        const carUpdated = await Car.findByIdAndUpdate(id, carModify, { new: true })
        return res.status(200).json(carUpdated)
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en updateCar')
    }
}

const deleteCar = async (req, res, next) => {
    try {
        const { id } = req.params
        const carDeleted = await Car.findByIdAndDelete(id, {new: true})
        return res.status(200).json(carDeleted)
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en deleteCar')
    }
}

const deleteCarOfPlayer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { model } = req.body;
        //const carFound = await Car.findOne({ $or: [{_id: id}, {model}] });
        const carFound = await Car.findOne({model});
        if (!carFound) {
            return res.status(400).json('⛔ No hay ningun coche que coincida con el modelo indicado');
        }
        //const carDeleted = await Car.findByIdAndDelete({$or: [{_id:id}, {model}]}, {new: true});
        const carDeleted = await Car.findOneAndDelete(id, {model}, {new: true});
        return res.status(200).json(carDeleted);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en deleteCarOfPlayer');
    }
};

module.exports = {
    postCar,
    getCars,
    getCarById,
    getCarsByBranch,
    getCarsByModel,
    getCarsByColor,
    getCarsByPrice,
    updateCar,
    deleteCar,
    deleteCarOfPlayer
}