import VaccinationSchema from '../models/vaccinationSchema.js'

export const getAllVaccinations = async (req, res) => {
  try {
    const vaccinations = await VaccinationSchema.find()    
    res.status(200).json(vaccinations) // return "OK" status and and vaccinations as json object
  } catch (error) {
    res.status(404).json({ message: error.message }) 
    // return "not found" status and error message
  }
}

