import VaccineOrders from '../models/vaccineOrderSchema.js'

export const getAllVaccineOrders = async (req, res) => {
  try {
    const vaccineOrders = await VaccineOrders.find()
    if(vaccineOrders) {
      res.send(vaccineOrders)
      res.status(200) // return "OK" status and and vaccineOrders as json object
    } 
  } catch (error) {
    res.status(404).json({ message: error.message }) 
    // return "not found" status and error message
  }
}
