const Sticky = require('../models/stickyModel')

module.exports = app => {
  app.get('/api/setupStickies', (req, res) => {
    const stickies = [
      {
        user: 'krishna',
        content: 'Add some text'
      },
      {
        user: 'krishna',
        content: 'Add some text for another sticky'
      }
    ]

    Sticky.create(stickies, (err, results) => {
      res.send(results)
    })
  })
}