var express = require('express')
var Top10s = require('../models').Top10s

var router = express.Router()

router.get('/top10', function(req, res, next) {
  Top10s.findAll({order: ['score'].ascending, limit: 10})
      .then( tTen => {
          return res.json(tTen)
      })
      return next(err)
})

router.post('/top10', function(req, res, next) {
  Top10s.create(req.body).then ((data) => {
    return res.status(201).send('ok')
  }).catch( err => {
    if (Err instanceof Sequelize.ValidationError) {
      return res.status(500).json(messages)
    }
    return next(err)
  })
})

/*router.get('/top10/:name', function(req, res, next) {
  Top10s.findOne({where: {name: req.params.name}})
    .then(player => {
      if (player) {
        return res.json(player)
      } else {
        return res.status(404).send()
      }
    })
    .catch( err => next.err() )
})*/

module.exports = router
