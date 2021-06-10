import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
// import vaccineOrderRoutes from './routes/vaccineOrderRoutes.js'
import vaccinationRoutes from './routes/vaccinationRoutes.js'

dotenv.config()

const app = express()

// Bodyparser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// app.use('/api/vaccinesorders', vaccineOrderRoutes)
app.use('/api/vaccinations', vaccinationRoutes)

const port = process.env.PORT || 5000

// DB in MongoDB and connecting to it
const CONNECTION_URL = process.env.MONGODB_URI

mongoose.connect(CONNECTION_URL, { 
  useNewUrlParser: true, useUnifiedTopology: true,
  // useFindAndModify: false
})
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`Server running on port ${port}`))
  })
  .catch((error) => console.log(error.message))

// TODO: Below code for preventing console warnings: check if it is really needed
mongoose.set('useFindAndModify', false)
