const models = require('../models')

module.exports = function (app) {

    //ROUTES CLIENTS//

    //Recuperer tous les clients
    app.get('/clients', (req, res) => {
        models
            .Client
            .findAll()
            .then(clients => res.json(clients))
    })

    //Recuperer un client par l'id
    app.get('/clients/:id', (req, res) => {
        models
            .Client
            .findByPk(req.params.id)
            .then(clients => res.json(clients))
    })

    //Creer un nouveau client
    app.post('/clients', (req, res) => {
        models
            .Client
            .create(req.body)
            .then(clients => res.json(clients))
    })

      //Modifier un client par son id
      app.put('/clients/:id', (req, res) => {
        models
            .Client
            .update(req.body, {
                where: { id: req.params.id }
            })
            .then(clients => res.json(clients))
    })

    //Supprimer un client par son id
    app.delete('/clients/:id', (req, res) => {
        models
            .Client
            .destroy( {where : {id : req.params.id} })
            .then(clients => res.json(clients))
    })


}