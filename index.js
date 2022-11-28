import express from 'express'

const app = express()
const port = 3000

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.get('/about', (req, res) => {
	res.send('About us')
})

app.post('/song', (req, res) => {
	console.log(req.body);
})

app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
})