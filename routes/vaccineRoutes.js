// Only routes here, to keep code clean. Logic in controllers.

import express from 'express'
import { getAllVaccinations } from '../controllers/vaccinationsController.js'

const router = express.Router()

router.get('/', getAllVaccinations)

export default router