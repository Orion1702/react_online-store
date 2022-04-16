const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt') // npm i jsonwebtoken bcrypt
const jwt = require('jsonwebtoken')
const {User, Bascet} = require('../models/models')

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Wrong email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User with this email already exists'))
        }
        const hasPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hasPassword})
        const basket = await Bascet.create({userId: user.id})
        const token = jwt.sign(
            {id: user.id, email, role}, 
            process.env.SECRET_KEY,
            {expiresIn: '24h'} // how long token will live
        )
        return res.json({token})
    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query
        if(!id) {
            return next(ApiError.badRequest('Не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()