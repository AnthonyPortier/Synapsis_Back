const models = require('../models')

module.exports = function (app) {

    //ROUTES CLUB HISTORY//

    //Recuperer tous les historiques
    app.get('/history', (req, res) => {
        models
            .Club_history
            .findAll()
            .then(history => res.json(history))
    })

    //Creer un nouvel historique
    app.post('/history', (req, res) => {
        models
            .Club_history
            .create(req.body)
            .then(history => res.json(history))
    })

    //Recuperer un historique par l'id
    app.get('/history/:id', (req, res) => {
        models
            .Club_history
            .findByPk(req.params.id)
            .then(history => res.json(history))
    })

    //Modifier un historique par son id
    app.put('/history/:id', (req, res) => {
        models
            .Club_history
            .update(req.body, {
                where: { id: req.params.id }
            })
            .then(history => res.json(history))
    })

    //Supprimer un historique  par son id
    app.delete('/history/:id', (req, res) => {
        models
            .Club_history
            .destroy({ where: { id: req.params.id } })
            .then(history => res.json(history))
    })


}