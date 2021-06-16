import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import vaccinationRouter from './routes/vaccinationRoutes.js'
import vaccineOrderRouter from './routes/vaccineOrderRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/vaccinations', vaccinationRouter)
app.use('/api/vaccineorders', vaccineOrderRouter)


// This should be seen when go to localhost:5000/actual deployed version:
app.get('/', (req, res) => {
  res.send('Greetings from Vaccinations and VaccineOrders API!')
})

const port = process.env.PORT || 5000

// DB in MongoDB and connecting to it
const CONNECTION_URL = process.env.MONGODB_URI

mongoose.connect(CONNECTION_URL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`Server running on port ${port}`))
  })
  .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)

mongoose.set('debug', true)
