const models = require('../models')

module.exports = function (app) {

    //ROUTES PALMARES//

    //Recuperer tous les palmares
    app.get('/palmares', (req, res) => {
        models
            .Palmares
            .findAll()
            .then(palmares => res.json(palmares))
    })

    //Recuperer un palmares par l'id
    app.get('/palmares/:id', (req, res) => {
        models
            .Palmares
            .findByPk(req.params.id)
            .then(palmares => res.json(palmares))
    })

    //Creer un nouveau palmares
    app.post('/palmares', (req, res) => {
        models
            .Palmares
            .create(req.body)
            .then(palmares => res.json(palmares))
    })

      //Modifier un palmares par son id
      app.put('/palmares/:id', (req, res) => {
        models
            .Palmares
            .update(req.body, {
                where: { id: req.params.id }
            })
            .then(palmares => res.json(palmares))
    })

    //Supprimer un palmares par son id
    app.delete('/palmares/:id', (req, res) => {
        models
            .Palmares
            .destroy( {where : {id : req.params.id} })
            .then(palmares => res.json(palmares))
    })


}