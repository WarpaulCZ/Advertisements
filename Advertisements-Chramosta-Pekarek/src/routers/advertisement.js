const express = require('express')
const Advertisement = require('../models/advertisement')
//const auth = require('../middleware/auth')

const router = new express.Router()

// operace Create
router.post('/advertisements', async (req, res) => {
    const advertisement = new Advertisement(req.body)
    try {
       await advertisement.save()
       res.status(201).send({ advertisement })
    } catch (e) {
       res.status(400).send(e)
    }
})

router.get('/advertisements', async (req, res) => {
   try {
      const tasks = await Advertisement.find({})
      res.send(tasks)
  } catch (e) {
      res.status(500).send()
  }
})

module.exports = router