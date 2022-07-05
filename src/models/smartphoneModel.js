const mongoose = require('mongoose')

const { Schema } = mongoose

const smartphoneModel = new Schema({
    model: { type: String, required: true },
    storage: { type: String, required: true },
    ram: { type: String, required: true },
    color: { type: String, required: true }
})

module.exports = mongoose.model('Smartphone', smartphoneModel)
