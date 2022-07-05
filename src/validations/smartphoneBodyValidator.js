const Joi = require('joi')

const schema = Joi.object({
  model: Joi.string().trim().required(),
  storage: Joi.string().trim().required(),
  ram: Joi.string().trim().required(),
  color: Joi.string().trim().required()
})

module.exports = schema