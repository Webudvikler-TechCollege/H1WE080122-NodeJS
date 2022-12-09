// Dependencies
import UserModel from "../Models/user.model.js"
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
dotenv.config()

/**
 * Authenticate Controller
 * Klasse til godkendelse af login
 */
class AuthenticateController {
	// Login Metode
	login = async (req, res) => {
		// Destructure assignment af brugernavn og password fra request body
		const { username, password } = req.body
		// Hvis form data er sat
		if(username && password) {
			// Henter id og password fra bruger i user db
			const userdata = await UserModel.findOne({
				attributes: ['id','password'],
				where: { email: username }
			})

			// Sammenligner krypteret version af form password med db password
			bcrypt.compare(password, userdata.password, (err, result) => {
				if(result) {
					// Generer json web token hvis bruger er godkendt
					const token = jwt.sign(userdata.id,process.env.PRIVATE_KEY)
					// Returnerer token til browser
					res.json({access_token: token})
				} else {
					// Sender status unauthorized
					res.sendStatus(401)
				}
			})
		} else {
			// Sender status forbidden
			res.sendStatus(403)
		}
	}

	protected = async (req, res) => {
		res.sendStatus(200)
	}
}

export default AuthenticateController