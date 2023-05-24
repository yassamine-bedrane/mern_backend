const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');


router.get('/:zoneId/:specialiteId', async (req, res) => {
    try {
        const zoneId = req.params.zoneId
        const specialiteId = req.params.specialiteId

        const data = await Restaurant.find({ zone: zoneId });

        const newData = data.filter(element => {
            console.log(element.specialite)

            return element.specialite.some((sp) => sp == specialiteId)
        })
        res.json(newData);
    } catch (err) {
        res.status(500).json("Server Error")
    }
})

module.exports = router;