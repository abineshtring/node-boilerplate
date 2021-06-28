const { port, env } = require('./utils/vars');
const logger = require('./utils/logger');
const app = require('./utils/express');

// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

module.exports = app;
