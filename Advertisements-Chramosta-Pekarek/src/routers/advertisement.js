const express = require('express')
const Advertisement = require('../models/advertisement')
//const auth = require('../middleware/auth')

const router = new express.Router()

// operace Create
router.post('/advertisement', async (req, res) => {
    const advertisement = new Advertisement(req.body)
    try {
       await advertisement.save()
       res.status(201).send({ advertisement })
    } catch (e) {
       res.status(400).send(e)
    }
})

module.exports = router