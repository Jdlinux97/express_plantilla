/** @format */

module.exports = (app, io) => {
	// Creating server middlewares
	app.use(function(req, res, next) {
		res.io = io;
		next();
	});
};
