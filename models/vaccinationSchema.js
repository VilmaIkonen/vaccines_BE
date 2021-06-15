import mongoose from 'mongoose'

const vaccinationSchema = mongoose.Schema({
  vaccinationid: String,
  sourceBottle: String,
  gender: String,
  vaccinationDate: Date
})

const Vaccinations = mongoose.model('Vaccinations', vaccinationSchema)

export default Vaccinations