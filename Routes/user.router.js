import express from 'express'
import UserController from '../Controllers/user.controller.js'
const UserRouter = express.Router()
const controller = new UserController

UserRouter.get('/users', (req, res) => { controller.list(req, res) })
UserRouter.get('/users/:id([0-9]*)', (req, res) => { controller.details(req, res) })
UserRouter.post('/users', (req, res) => { controller.create(req, res) })
UserRouter.put('/users/:id([0-9]*)', (req, res) => { controller.update(req, res) })



export default UserRouter