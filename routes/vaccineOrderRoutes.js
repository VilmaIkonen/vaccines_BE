// Only routes here, to keep code clean. Logic in controller.

import express from 'express'
import { getAllVaccineOrders } from '../controllers/vaccineOrderController.js'

const vaccineOrderRouter = express.Router()

vaccineOrderRouter.get('/', getAllVaccineOrders)

export default vaccineOrderRouter