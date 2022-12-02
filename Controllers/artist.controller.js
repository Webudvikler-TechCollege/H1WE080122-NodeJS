// Importer dependencies
import db from '../Config/mysql.config.js'

/**
 * Controller for songs
 */
class ArtistController {
	constructor() {
		console.log("Artist Controller is fired");
	}

	list = (request, response) => {
		let { sortkey, sortdir, limit, attributes } = request.query
		sortkey = sortkey ? sortkey : 'id'
		sortdir = sortdir ? sortdir : 'ASC'
		limit = limit ? `LIMIT ${limit}` : ''
		attributes = attributes ? attributes : 'id, name'

		const sql = `SELECT ${attributes} 
						FROM artist 
						ORDER BY ${sortkey} ${sortdir} 
						${limit}`
		console.log(sql);
		db.query(sql, (err, result) => {
			if(err) {
				console.error(err)
			} else {
				response.json(result)
			}
		})
	}
}

export default ArtistController