const mongoose = require("mongoose");
const TeamsSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
        // unique: true,
    },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'players' }]

});
module.exports = Teams = mongoose.model("Teams", TeamsSchema);
