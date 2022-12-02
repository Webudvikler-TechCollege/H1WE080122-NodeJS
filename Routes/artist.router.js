// Importerer dependencies
import express from 'express'
import ArtistController from '../Controllers/artist.controller.js'

// Deklarerer Express Router Object
const ArtistRouter = express.Router()
// Kalder instans af ArtistController Class
const controller = new ArtistController

ArtistRouter.get('/api/artist', (request, response) => {
	console.log('Artist Route List')
	controller.list(request, response)
})


export default ArtistRouter