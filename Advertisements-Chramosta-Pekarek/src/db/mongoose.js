//////////////////////////////////////////////////////////////
//
// Řešení 9. cvičení, task-manager/src/db/mongoose.js
//
//////////////////////////////////////////////////////////////

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
})


// const uzivatel = new User({
//     name: 'Petr',
//     age: '21'
// })

// const uloha = new Task({
//     description: '  Psát básně'
// })


// uzivatel.save().then(() => {
//     console.log(uzivatel)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// uloha.save().then(() => {
//     console.log(uloha)
// }).catch((error) => {
//     console.log(error)
// })