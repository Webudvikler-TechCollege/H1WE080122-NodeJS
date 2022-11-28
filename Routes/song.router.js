import express from 'express'

const router = express.Router()

// List
router.get('/song', (req, res) => {
	console.log('Liste: Kalder /song med GET')
})

// Details
router.get('/song/:id([0-9]*)', (req, res) => {
	console.log('Detaljer: Kalder /song med GET')
})

// Create
router.post('/song', (req, res) => {
	console.log('Opret: Kalder /song med POST')
})

// Update
router.put('/song', (req, res) => {
	console.log('Opdater: Kalder /song med PUT')
})

// Delete
router.delete('/song/:id([0-9]*)', (req, res) => {
	console.log('Slet: Kalder /song med DELETE')
})

export { router }