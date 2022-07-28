const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const Teams = require('../models/Teams');

router.get('/', async (req, res) => {
    try {
        let teams = await Teams.find().populate({
            path: 'members',
        })
        return res.status(200).json(teams);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Serve Error");
    }
})
router.get('/:teamsId', async (req, res) => {
    try {
        let team = await Teams.findById(req.params.teamsId).populate('members');
        return res.status(200).json(team)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Serve Error");
    }
})
module.exports = router;

