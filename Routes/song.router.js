// Importerer dependencies
import express from 'express'
import SongController from '../Controllers/song.controller.js'

// Deklarerer Express Router Object
const SongRouter = express.Router()
// Deklarerer controller instans
const controller = new SongController()

// Endpoint - List 
SongRouter.get('/song', (req, res) => {
	console.log('Liste: Kalder /song med GET')
	controller.list(req, res)
})

// Endpoint - Details 
SongRouter.get('/song/:id([0-9]*)', (req, res) => {
	console.log('Detaljer: Kalder /song med GET')
	controller.details(req, res)
})

// Endpoint - Create
SongRouter.post('/song', (req, res) => {
	console.log('Opret: Kalder /song med POST')
	controller.create(req, res)
})

// Endpoint - Update
SongRouter.put('/song', (req, res) => {
	console.log('Opdater: Kalder /song med PUT')
	controller.update(req, res)
})

// Endpoint - Delete
SongRouter.delete('/song/:id([0-9]*)', (req, res) => {
	console.log('Slet: Kalder /song med DELETE')
	controller.delete(req, res)
})

export default SongRouter