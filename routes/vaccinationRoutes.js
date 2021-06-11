// Only routes here, to keep code clean. Logic in controller.

import express from 'express'
import { getAllVaccinations } from '../controllers/vaccinationController.js'

const vaccinationRouter = express.Router()

vaccinationRouter.get('/', getAllVaccinations)

export default vaccinationRouter