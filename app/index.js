/** @format */

// Require dotenv for read .env
require('dotenv').config();

// Require Libraries to use
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

// Init Libraries
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Server configuration
require(`${__dirname}/config/config`)(app, express, io, cors);

// Middleware configuration
require(`${__dirname}/config/middlewares`)(app, io);

// Routes configuration
require(`${__dirname}/config/routes`)(app);

server.listen(process.env.PORT, () => {
	console.log(`Service up in the port ${process.env.PORT}`);
	console.log('Press Ctrl+C to quit.');
});

// module.exports = app;
