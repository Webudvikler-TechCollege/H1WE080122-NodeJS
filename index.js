// Import af dependencies
import express from 'express'
import dotenv from 'dotenv';
import InitRouter from './Routes/init.router.js'
import UserRouter from './Routes/user.router.js'
import OrgRouter from './Routes/org.router.js'
import SongRouter from './Routes/song.router.js'
import ArtistRouter from './Routes/artist.router.js'
import { router as AuthRouter } from './Routes/authenticate.router.js'

// Kalder dotenv modul
dotenv.config();
// Deklarerer port
const port = process.env.PORT || 3000
// Deklarerer app objekt
const app = express()

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))

// Route til forside
app.get('/', (req, res) => {
	res.send('Hello world')
})

// Router bundles
app.use(InitRouter)
app.use(AuthRouter)
app.use(UserRouter)
app.use(OrgRouter)

app.use(SongRouter)
app.use(ArtistRouter)

// Run server
app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
})