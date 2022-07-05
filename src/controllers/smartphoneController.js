const httpStatus = require('../helpers/httpStatus')

const smartphoneController = (Smartphone) => {
  const getAllSmartphone = async (req, res, next) => {
    try {
      const { query } = req

      const response = await Smartphone.find(query)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const postSmartphone = async (req, res, next) => {
    try {
      const { body } = req
 
      const smartphoneData = {
        ...body,
      }

      const smartphone = await new Smartphone(smartphoneData)

      await smartphone.save()

      return res.status(httpStatus.CREATED).json(smartphone)
    } catch (err) {
      next(err)
    }
  }

  const putSmartphoneById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await Smartphone.find({
        _id: params.id
      })

      if (checkData === null) {
        return res
          .status(httpStatus.FORBIDDEN)
          .send('No data found with the provided ID.')
      }

      await Smartphone.updateOne(
        {
          _id: params.id
        },
        {
          $set: {
            model: body.model,
            storage: body.storage,
            ram: body.ram,
            color: body.color
          }
        }
      )

      return res.status(httpStatus.CREATED).send('Data successful updated')
    } catch (err) {
      next(err)
    }
  }

  const getSmartphoneById = async (req, res, next) => {
    try {
      const { params } = req

      const response = await Smartphone.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deleteSmartphoneById = async (req, res, next) => {
    try {
      const { params } = req

      await Smartphone.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).send('Data successful deleted')
    } catch (err) {
      next(err)
    }
  }

  return {
    getAllSmartphone,
    getSmartphoneById,
    postSmartphone,
    putSmartphoneById,
    deleteSmartphoneById
  }
}

module.exports = smartphoneController
