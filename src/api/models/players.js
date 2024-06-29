const mongoose = require('mongoose');

const playersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    position: { type: String, required: true, enum: ['Portero', 'Defensa', 'Centrocampista', 'Delantero']},
    age: { type: Number },
    nationality: { type: String },
    image: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKBAvp2cIyJU2CHDl-iAWqMhGbBm5wS3C4g&s'},
    cars: [{ type: mongoose.Types.ObjectId, ref: 'cars' }]
    }
);

const Player = mongoose.model('players', playersSchema, 'players');

module.exports = Player;