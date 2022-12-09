import express from 'express'
import AuthenticateController from '../Controllers/authenticate.controller.js'
const router = express.Router()

const controller = new AuthenticateController();

router.post('/login', (req, res) => { controller.login(req, res)})

export { router }