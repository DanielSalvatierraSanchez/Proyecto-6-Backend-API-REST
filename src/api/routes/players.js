const { postPlayer, getPlayers, getPlayerById, getPlayersByName, getPlayerByNumber, getPlayersByPosition, getPlayersByAge, getPlayersByNationality, updatePlayer, deletePlayer } = require('../controllers/players');

const playersRouter = require('express').Router();

playersRouter.post('/register', postPlayer);
playersRouter.get('/nationality/:nationality', getPlayersByNationality);
playersRouter.get('/age/:age', getPlayersByAge);
playersRouter.get('/position/:position', getPlayersByPosition);
playersRouter.get('/number/:number', getPlayerByNumber);
playersRouter.get('/name/:name', getPlayersByName);
playersRouter.get('/id/:id', getPlayerById);
playersRouter.get('/', getPlayers);
playersRouter.put('/:id', updatePlayer);
playersRouter.delete('/:id', deletePlayer);

module.exports = playersRouter;