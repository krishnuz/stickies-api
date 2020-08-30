const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stickiesSchema = new Schema({
  user: String,
  content: String,
})

const Sticky = mongoose.model('Sticky', stickiesSchema)

module.exports = Sticky