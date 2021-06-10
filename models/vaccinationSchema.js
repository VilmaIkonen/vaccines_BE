import mongoose from 'mongoose'

const vaccinationSchema = mongoose.Schema({
  vaccinationid: String,
  sourceBottle: String,
  gender: String,
  vaccinationDate: Date
})

const VaccinationSchema = mongoose.model('VaccinationSchema', vaccinationSchema)

export default VaccinationSchema