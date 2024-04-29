const server = require('./server');
const config = require('./config');
const environmentLoader = require('./environmentLoader');

environmentLoader.loadEnvironment();

server.start(config.port);
console.log(`Server running on port ${config.port}`);
