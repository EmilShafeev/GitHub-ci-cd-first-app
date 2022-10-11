import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
	res.send('Welcome dude!')
})

app.listen(3000, () => {
	console.log('APP STARTED')
})
