import UserModel from '../Models/user.model.js'

/**
 * Controller for User Actions
 */
class UserController {

	/**
	 * Method List
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	list = async (req, res) => {
		// Destructure Assignment - optional list management
		let { sortkey, sortdir, limit, attributes } = req.query
		// Sætter array til sort og retning
		const order = [sortkey ? sortkey : 'id']
		order.push(sortdir || 'ASC')
		// Sætter limit antal
		limit = parseInt(limit) || 1000
		// Sætter attributter (table felter)
		const attr = attributes ? attributes.split(',') : new Array('id', 'firstname', 'lastname')

		// Eksekverer sequelize metode med management values
		const result = await UserModel.findAll({
			attributes: attr,
			order: [order],
			limit: limit
		})
		// Udskriver resultat i json format
		res.json(result)
	}

	/**
	 * Method Details
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	details = async (req, res) => {
		// Destructure assignment af id. 
		const { id } = req.params || 0
		// Eksekverer sequelize metode med attributter og where clause
		const result = await UserModel.findOne({
			attributes: ['id', 'firstname', 'lastname', 'email', 'is_active', 'createdAt', 'updatedAt'],
			where: { id: id }
		})
		// Udskriver resultat i json format
		res.json(result)
	}
}

export default UserController