const express = require('express')
const Advertisement = require('../models/advertisement')
//const auth = require('../middleware/auth')

const router = new express.Router()

// operace Create
router.post('/advertisements', async (req, res) => {
    const ad = new Advertisement(req.body)
    try {
       await ad.save()
       res.status(201).send({ ad })
    } catch (e) {
       res.status(400).send(e)
    }
})

router.get('/advertisements', async (req, res) => {
   try {
      const ads = await Advertisement.find({})
      const user = req.user

      res.render("advertisements.hbs", {
          ads:ads,
          user: user
      })
      
  } catch (e) {
      res.status(500).send()
  }
})

module.exports = router