/*
* TODO:
* - [] Uncomment unique
*
*/

const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    registerNo: {
        type: String,
        required: true,
        // unique: true,
    },
    event: {
        type: String,
        enum: ['csgo', 'valorant', 'fifa'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    discordId: {
        type: String,
        required: true,
        // unique: true,
    },
    phoneNo: {
        type: Number,
        required: true,
        // unique: true,
    },
    playerId: {
        type: String,
        required: true,
        // unique: true,
    },
    solo: {
        type: Boolean,
        required: true
    }
});
module.exports = players = mongoose.model("players", PlayerSchema);
