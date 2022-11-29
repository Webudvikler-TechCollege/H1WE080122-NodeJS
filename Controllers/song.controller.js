import db from '../Config/mysql.config.js'

/**
 * Controller for songs
 */
class SongController {
	// Class constructor
	constructor() {
		console.log('Song Controller has been fired');
	}

	/**
	 * Method list - henter alle records
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	list = (req, res) => {
		// Deklarerer SQL
		const sql = "SELECT id, title, artist_id FROM song"
		// Eksekverer SQL
		db.query(sql, (err, result) => {
			if(err) {
				console.error(err)
			} else {
				res.json(result);
			}
		})		
	}

	/**
	 * Method details - henter en record ud fra id (url param)
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	details = (req, res) => {
		// Deklarerer var id ud fra url parametre
		const id = req.params.id || 0
		// Deklarerer SQL
		const sql = "SELECT title, content, artist_id FROM song WHERE id = ?"
		// Eksekverer SQL
		db.query(sql, [id], (err, result) => {
			if(err) {
				console.error(err)
			} else {
				res.json(result);
			}
		})		
	}

	/**
	 * Method create - opretter ny record
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	create = (req, res) => {
		res.send('Opret sang')
		// Form Data kan hentes fra body på request objektet
		console.log(req.body);
	}

	/**
	 * Method update - opdaterer record ud fra id (req.body)
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	update = (req, res) => {
		res.send('Opdater sang')
		// Form Data kan hentes fra body på request objektet
		console.log(req.body);

	}	

	/**
	 * Method delete - sletter record ud fra id (url param)
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	delete = (req, res) => {
		res.send('Sletter sang')
		// ID kan hentes fra params på request objektet
		console.log(req.params.id);

	}	
}

export default SongController