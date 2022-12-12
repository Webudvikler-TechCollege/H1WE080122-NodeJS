import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

/**
 * Functionskonstant til at tjekke token med
 * @param {*} req Request Object
 * @param {*} res Response Object
 * @param {*} next Next Method - bruges til at sende en request videre med
 */
const verifyToken = (req, res, next) => {
	// Henter authorization header
	const bearerHeader = req.headers['authorization']
	// Udskiller token fra Bearer string
	const access_token = bearerHeader.substring(7)
	// Verificerer token med jwt og private key
	jwt.verify(access_token, process.env.PRIVATE_KEY, (err, result) => {
		if(!err) {
			// Kald next metode hvis true
			next()
		} else {
			// Meld unauthorized hvis false
			res.sendStatus(403)
		}
	})	
}

export default verifyToken