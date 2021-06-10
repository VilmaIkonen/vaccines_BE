import mongoose from 'mongoose'

const vaccineOrderSchema = mongoose.Schema({
  id: String,
  orderNumber: String,
  responsiblePerson: String,
  healthCareDistrict: String,
  vaccine: String,
  injections: Number,
  aarrived: Date
})

const VaccineOrderSchema = mongoose.model('VaccineOrderSchema', vaccineOrderSchema)

export default VaccineOrderSchema