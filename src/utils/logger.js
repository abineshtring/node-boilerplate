const winston = require('winston');
const { env } = require('./vars');

const printFormat = winston.format.printf(({
  level, message, metadata, error,
}) => `${level}: ${message} | ${metadata ? JSON.stringify(metadata) : ''}${error ? JSON.stringify(error.stack) : ''}`);

const logger = winston.createLogger({
  level: env !== 'production' ? 'debug' : 'info',
  handleExceptions: true,
  exitOnError: false,
});

logger.add(new winston.transports.Console({
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.colorize(),
    printFormat,
  ),
}));

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

module.exports = logger;
