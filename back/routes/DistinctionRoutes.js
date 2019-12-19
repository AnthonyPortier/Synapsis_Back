const models = require('../models')

module.exports = function (app) {

    //ROUTES DISTINCTIONS//

    //Recuperer toutes les distinctions
    app.get('/distinctions', (req, res) => {
        models
            .Distinction
            .findAll()
            .then(distinction=> res.json(distinction))
    })

    //Recuperer une distinction par l'id
    app.get('/distinction/:id', (req, res) => {
        models
            .Distinction
            .findByPk(req.params.id)
            .then(distinction => res.json(distinction))
    })

    //Creer une nouvel distinction
    app.post('/distinction', (req, res) => {
        models
            .Distinction
            .create(req.body)
            .then(distinction => res.json(distinction))
    })

      //Modifier une distinction par son id
      app.put('/distinction/:id', (req, res) => {
        models
            .Distinction
            .update(req.body, {
                where: { id: req.params.id }
            })
            .then(distinction => res.json(distinction))
    })

    //Supprimer une distinction par son id
    app.delete('/distinction/:id', (req, res) => {
        models
            .Distinction
            .destroy( {where : {id : req.params.id} })
            .then(distinction => res.json(distinction))
    })

}