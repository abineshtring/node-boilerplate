// export env variables

require('dotenv-flow').config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 8080,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
