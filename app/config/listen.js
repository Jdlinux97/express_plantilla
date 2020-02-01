/** @format */

// Require dotenv for read .env
require('dotenv').config();

module.exports = (server, app, ngrok) => {
	const typeListen = process.env.LISTENG_TYPE;

	switch (typeListen) {
		case 'public':
			app.listen(app.get('PORT'), process.env.IP);

			(async () => {
				const url = await ngrok.connect(app.get('PORT'));
				console.log(url);
			})();
			break;

		case 'normal':
			server.listen(app.get('PORT'), () => {
				console.log(`Service up in the port ${app.get('PORT')}`);
				console.log('Press Ctrl+C to quit.');
			});
			break;

		default:
			break;
	}
};
