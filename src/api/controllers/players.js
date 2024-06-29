const Player = require("../models/players");

const postPlayer = async (req, res, next) => {
    try {
        const { name, number } = req.body;
        const playerRepeated = await Player.findOne({ $or: [{ name }, { number }] });
        if (playerRepeated) {
            return res.status(400).json('⛔ El jugador o el dorsal ya existen');
        }
        const newPlayer = new Player(req.body);
        const playerSaved = await newPlayer.save();
        return res.status(201).json(playerSaved);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en postPlayer');
    }
};

const getPlayers = async (req, res, next) => {
    try {
        const allPlayers = await Player.find().populate("cars");
        if (!allPlayers.length) {
            return res.status(404).json('⛔ No existen jugadores');
        }
        return res.status(200).json(allPlayers);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getPlayers');
    }
};

const getPlayerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const playerById = await Player.findById(id);
        if (!playerById) {
            return res.status(404).json('⛔ No existe ese ID');
        }
        return res.status(200).json(playerById);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getPlayerById');
    }
};


const getPlayersByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const playersByName = await Player.find({name: new RegExp(name, 'i')});
        if (!playersByName.length) {
            return res.status(404).json('⛔ No existen jugadores con ese nombre');
        }
        return res.status(200).json(playersByName);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getPlayersByName');
    }
};

const getPlayerByNumber = async (req, res, next) => {
    try {
        const { number } = req.params;
        const playerByNumber = await Player.find({number});
        if (!playerByNumber.length) {
            return res.status(404).json('⛔ No existen jugadores con ese número');
        }
        return res.status(200).json(playerByNumber);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getPlayerByNumber');
    }
};

const getPlayersByPosition = async (req, res, next) => {
    try {
        const { position } = req.params;
        const playersByPosition = await Player.find({position: new RegExp(position, 'i')});
        if (!playersByPosition.length) {
            return res.status(404).json('⛔ No existen jugadores en esa posición');
        }
        return res.status(200).json(playersByPosition);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getPlayersByPosition');
    }
};

const getPlayersByAge = async (req, res, next) => {
    try {
        const { age } = req.params;
        const playersByAge = await Player.find({age});
        if (!playersByAge.length) {
            return res.status(404).json('⛔ No existen jugadores con esa edad');
        }
        return res.status(200).json(playersByAge);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getPlayersByAge');
    }
};

const getPlayersByNationality = async (req, res, next) => {
    try {
        const { nationality } = req.params;
        const playersByNationality = await Player.find({nationality: new RegExp(nationality, 'i')});
        if (!playersByNationality.length) {
            return res.status(404).json('⛔ No existen jugadores con esa nacionalidad');
        }
        return res.status(200).json(playersByNationality);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en getPlayersByNationality');
    }
};

const updatePlayer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { cars, ...rest } = req.body;
        const allParams = { ...rest };
        if (cars) {
            allParams.$addToSet = { cars: cars };
        }
        const playerUpdated = await Player.findByIdAndUpdate(id, allParams, {new: true});
        return res.status(200).json(playerUpdated);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en updatePlayer');
    }
};

const deletePlayer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const playerDeleted = await Player.findByIdAndDelete(id);
        return res.status(200).json(playerDeleted);
    } catch (error) {
        return res.status(400).json('⛔⛔⛔ ERROR en deletePlayer');
    }
};

module.exports = { postPlayer, getPlayers, getPlayerById, getPlayersByName, getPlayerByNumber, getPlayersByPosition, getPlayersByAge, getPlayersByNationality, updatePlayer, deletePlayer };