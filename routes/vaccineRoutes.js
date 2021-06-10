// Only routes here, to keep code clean. Logic in controllers.

import express from 'express'
import { getX } from '../controllers/vaccineControllers.js'

const router = express.Router()

router.get('/', getX)

export default router