require('dotenv').config();
const mongoose = require('mongoose');
const Player = require('../../api/models/players');
const playersRM = require('../../data/players');
const Car = require('../../api/models/cars');
const luxuryCars = require('../../data/cars');

const seeds = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('SEED CONECTANDOSE A LA BBDD ✅');
        await Player.collection.drop();
        await Car.collection.drop();
        console.log('SEED ELIMINANDO TODOS LOS PLAYERS ✅');
        await Player.insertMany(playersRM);
        await Car.insertMany(luxuryCars);
        console.log('SEED INSERTANDO NUEVOS PLAYERS ✅');
        await mongoose.disconnect();
        console.log('SEED DESCONECTANDOSE DE LA BBDD ❌');
    } catch (error) {
        console.log(error);
    }
};

// const carsSeed = async () => {
//     try {
//         await mongoose.connect(process.env.DB_URL);
//         await mongoose.disconnect();
        
//     } catch (error) {
//         console.log(error);
//     }
// };

seeds();