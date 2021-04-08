
const express = require('express')
const path = require('path')
const hbs = require('hbs')
require('./db/mongoose')

// const User = require('./models/user')
// const Task = require('./models/advertisment')

const userRouter = require('./routers/user')
const advertismentRouter = require('./routers/advertisement')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

hbs.registerPartials(partialsPath)

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))
app.use(express.json())

app.use(advertismentRouter)
app.use(userRouter)

app.get("", (req, res)=> {
    res.render("index.hbs")
})

app.listen(port, () => {
    console.log('Port: ' + port)
})