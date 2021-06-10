// Only routes here, to keep code clean. Logic in controller.

import express from 'express'
import { getAllVaccinations } from '../controllers/vaccinationController.js'

const router = express.Router()

router.get('/', getAllVaccinations)

export default router