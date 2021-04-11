const jwt = require('jsonwebtoken')
const User = require('../models/user')

const logged = async (req, res, next) => {
    try {
        const token = req.cookie("token")
        const decoded = jwt.verify(token, 'Valentýn')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user

        next()
    }
    catch (e){
        next()
    }
}

module.exports = logged 