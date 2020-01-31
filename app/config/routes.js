/** @format */
//Importando los archivos de la ruta
const ruta = require(`${__dirname}/../routes`);

module.exports = (app, io) => {
	//Archivos de rutas del servicio
	app.use('/api', ruta);

	// Ruta de error
	app.all('*', (req, res) => {
		res.status(404).json({ err: 'NOT FOUND' });
	});
};
