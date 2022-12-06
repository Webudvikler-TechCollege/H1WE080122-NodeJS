import express from 'express'
import { sequelize } from '../Config/sequelize.config.js'
const InitRouter = express.Router()

import UserModel from '../Models/user.model.js'

InitRouter.get('/init', (request, response) => {
	try {
		sequelize.sync()
		response.sendStatus(200)
	} 
	catch(err) {
		response.send(err)
	}
})

export default InitRouter