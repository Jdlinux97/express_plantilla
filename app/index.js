/** @format */

// Require dotenv for read .env
require('dotenv').config();

// Require Libraries to use
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const ngrok = require('ngrok');

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

// Listeng configuration
require(`${__dirname}/config/listen`)(server, app, ngrok);

module.exports = app;
