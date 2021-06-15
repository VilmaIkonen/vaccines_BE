import mongoose from 'mongoose'

const vaccineOrderSchema = mongoose.Schema({
  id: String,
  orderNumber: Number,
  responsiblePerson: String,
  healthCareDistrict: String,
  vaccine: String,
  injections: Number,
  arrived: Date
})

const VaccineOrders = mongoose.model('VaccineOrders', vaccineOrderSchema)

export default VaccineOrders