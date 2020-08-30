const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const Sticky = require('../models/stickyModel')

module.exports = app => {
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/api/stickies/:user', (req, res) => {
    Sticky.find({
      user: req.params.user
    }, (err, result) => {
      if(err) {
        throw err
      }
      res.send(result)
    })
  })

  app.post('/api/sticky', (req, res) => {
    if(req.body.id) {
      Sticky.findByIdAndUpdate(req.body.id,
        {
          user: 'krishna',
          content: req.body.content,
        },
        (err, result) => {
        if(err) {
          throw err
        }
        res.send(result)
      })
    } else {
      const newSticky = Sticky({
        user: 'krishna',
        content: req.body.content
      })
      newSticky.save((err, sticky) => {
        if(err) {
          throw err
        }
        res.send(sticky)
      })
    }
  })

  app.delete('/api/sticky', (req, res) => {
    Sticky.findByIdAndRemove(req.body.id, (err, result) => {
      if(err) {
        throw err
      }
      res.send(result)
    })
  })
}