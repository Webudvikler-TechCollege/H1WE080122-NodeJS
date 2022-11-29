import express from 'express'
import dotenv from 'dotenv';
import SongRouter from './Routes/song.router.js'

dotenv.config();
const port = process.env.PORT || 3000

const app = express()

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.use(SongRouter)

app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
})