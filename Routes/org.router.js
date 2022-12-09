import express from 'express';
import OrgController from '../Controllers/org.controller.js';

// Kalder instans af artist controller
const controller = new OrgController();

// Sætter OrgRouter objekt fra express
const OrgRouter = express.Router();

// Peger routes på metoder i controller
OrgRouter.get('/org', (req, res) => { controller.list(req,res) })
OrgRouter.get('/org/:id([0-9]*)', (req, res) => { controller.get(req,res) })
OrgRouter.post('/org', (req, res) => { controller.create(req,res) })
OrgRouter.put('/org/:id([0-9]*)', (req, res) => { controller.update(req,res) })
OrgRouter.delete('/org/:id([0-9]*)', (req, res) => { controller.delete(req,res) })

export default OrgRouter