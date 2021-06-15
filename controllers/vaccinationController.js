import Vaccinations from '../models/vaccinationSchema.js'

export const getAllVaccinations = async (req, res) => {
  try {
    const vaccinations = await Vaccinations.find()    
    if(vaccinations) {
      res.send(vaccinations)
      res.status(200) // return "OK" status and and vaccinations as json object
    } else {
      throw new Error('Vaccinations not found')
    }
  } catch (error) {
    res.status(404).json({ message: error.message }) 
    // return "not found" status and error message
  }
}

