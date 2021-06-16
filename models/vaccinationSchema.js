import mongoose from 'mongoose'

const vaccinationSchema = new mongoose.Schema({
  vaccinationid: String,
  sourceBottle: String,
  gender: String,
  vaccinationDate: Date
},
{collection: 'vaccinations'})

const Vaccinations = mongoose.model('vaccinations', vaccinationSchema)

export default Vaccinations