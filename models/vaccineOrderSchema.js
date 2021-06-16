import mongoose from 'mongoose'

const vaccineOrderSchema = new mongoose.Schema({
  id: String,
  orderNumber: Number,
  responsiblePerson: String,
  healthCareDistrict: String,
  vaccine: String,
  injections: Number,
  arrived: Date
},
{collection: 'vaccineOrders'}) // w/o this mongoose will use 'vaccineorders' --> no data found

const VaccineOrders = mongoose.model('vaccineOrders', vaccineOrderSchema)

export default VaccineOrders