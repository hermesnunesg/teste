const winston = require('winston');
const config = require('./config');

const logger = winston.createLogger({
    level: config.loggingLevel,
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

module.exports = logger;
