const express = require('express')
const smartphoneController = require('../controllers/smartphoneController')
const validator = require('express-joi-validation').createValidator({})
const bodySchema = require('../validations/smartphoneBodyValidator')

const router = (Smartphone) => {
  const smartphoneRouter = express.Router()

  const { getAllSmartphone, getSmartphoneById, postSmartphone, putSmartphoneById, deleteSmartphoneById } =
    smartphoneController(Smartphone)

  smartphoneRouter
    .route('/smartphone')
    .get(getAllSmartphone)
    .post(validator.body(bodySchema), postSmartphone)

  smartphoneRouter
    .route('/smartphone/:id')
    .get(getSmartphoneById)
    .put(validator.body(bodySchema), putSmartphoneById)
    .delete(deleteSmartphoneById)

  return smartphoneRouter
}

module.exports = router
