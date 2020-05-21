/** @format */

// Require dotenv for read .env
require('dotenv').config()

module.exports = (app, express, io, cors) => {
	// Configurando pueto
	app.set('PORT', process.env.PORT || 8080)

	// Socket js configuration
	require(`${__dirname}/socket`)(io)

	// Configuration to receive data on the server
	app.use(express.json())
	app.use(express.urlencoded({ extended: false }))

	/** Configurando Header*/
	app.use(cors({ origin: true, credentials: true }))
	app.use(function (req, res, next) {
		res.header('Access-Control-Allow-Origin', '*')
		res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
		res.header(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept, Json'
		)
		next()
	})
}
