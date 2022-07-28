const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const Player = require('../models/Player');
const Teams = require('../models/Teams');

router.post('/', async (req, res) => {
    try {
        if (req.body.solo) {
            let player = new Player({
                ...req.body
            })
            await player.save();
            return res.status(201).json({
                success: true
            })

        }
        let members = req.body.members;
        let ids = [];
        const solo = req.body.solo;
        members.forEach(async mem => {
            let player = new Player({
                ...mem,
                solo
            })
            ids.push(player.id);
            await player.save();
        });
        let teams = new Teams({
            members: ids,
            teamName: req.body.teamName
        })
        await teams.save();
        return res.status(201).json({
            success: true
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Serve Error");
    }
})
module.exports = router;

