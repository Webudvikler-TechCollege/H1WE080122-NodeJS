import OrgModel from '../Models/Org.model.js'

/**
 * Controller for Org Actions
 */
class OrgController {

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
		const attr = attributes ? attributes.split(',') : new Array('id', 'title')

		// Eksekverer sequelize metode med management values
		const result = await OrgModel.findAll({
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
		const result = await OrgModel.findOne({
			attributes: ['id', 'title', 'address', 'zipcode', 'city', 'country', 'createdAt', 'updatedAt'],
			where: { id: id }
		})
		// Udskriver resultat i json format
		res.json(result)
	}

	/**
	 * Method Details
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	create = async (req, res) => {
		// Destructure assignment af form data fra request body
		const { title, address, zipcode, city, country } = req.body;
		// Tjekker felt data
		if(title && address && zipcode && city) {
			// Opretter record
			const model = await OrgModel.create(req.body)
			// Sender nyt id som json object
			res.json({ newId: model.id })
		} else {
			res.sendStatus(418)
		}
	}

	update = async (req, res) => {
		// Destructure assignment af id. 
		const { id } = req.params || 0
		// Destructure assignment af form data fra request body
		const { title, address, zipcode, city, country } = req.body;
		// Tjekker felt data
		if(id && title && address && zipcode && city) {
			// Opretter record
			const model = await OrgModel.update(req.body, {
				where: { id: id },
				individualHooks: true
			})
			// Sender nyt id som json object
			res.json({ 
				msg: 'Record update' 
			})
		} else {
			res.sendStatus(418)
		}	
	}
}

export default OrgController