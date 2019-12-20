const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const LoginRoutes = express.Router()

const models = require('../models')
LoginRoutes.use(cors())

process.env.SECRET_KEY = 'secret'

LoginRoutes.post('/register', (req, res) => {
    const userData = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password: req.body.password,
    }
    models.User.findOne({
        where : {
            email : req.body.email
        }
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                models.User.create(userData)
                .then(user => {
                    res.json({status : user.email + ' Registered'})
                })
                .catch(err => res.send(err))
            })
        }
        else{
            res.json('User already exists')
        }
    })
    .catch(err => console.log(err))
})


LoginRoutes.post('/login', (req, res) => {
    models
    .User
    .findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY)
                res.send(token)
            }
        }
        else {
            console.error('errr')
            res.send(`l'utilisateur n'existe pas`)
        }
    })
    .catch(err => res.send(err))
})

module.exports = LoginRoutes

