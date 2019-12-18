const models = require('../models')

module.exports = function (app) {

    //ROUTES USERS//

    //Recuperer tous les users
    app.get('/users', (req, res) => {
        models
            .User
            .findAll()
            .then(user => res.json(user))
    })

    // Recuperer un user par son id incluant son historique et son palmares et ses distinctions perso
    app.get('/users/:id', (req, res) => {
        models
            .User
            .findByPk(
                req.params.id,
                { include: [models.Palmares, models.Club_history, models.Distinction] }
                )
            .then(user => res.json(user))
    })

    //Modifier un user par son id
    app.put('/users/:id', (req, res) => {
        models
            .User
            .update(req.body, {
                where: { id: req.params.id }
            })
            .then(user => res.json(user))
    })

    //Supprimer un user par son id
    app.delete('/users/:id', (req, res) => {
        models
            .User
            .destroy( {where : {id : req.params.id} })
            .then(user => res.json(user))
    })

}
