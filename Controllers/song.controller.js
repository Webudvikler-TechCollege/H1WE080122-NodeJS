// Importer dependencies
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
		const sql = `SELECT s.id, s.title, a.name  
						FROM song s 
						JOIN artist a 
						ON s.artist_id = a.id`
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
		const sql = `SELECT s.title, s.content, a.name  
						FROM song s 
						JOIN artist a 
						ON s.artist_id = a.id 
						WHERE s.id = ?`
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
		
		const { title, content, artist_id } = req.body;

		if(title && content && artist_id) {
			const sql = `INSERT INTO song(title, content, artist_id)  
							VALUES(?,?,?)`
			db.query(sql, [title, content, artist_id], (err, result) => {
				if(err) {
					console.error(err)
				} else {
					res.json({ newId: result.insertId });
				}
			})
		}
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