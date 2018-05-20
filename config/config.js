const fs = require('fs');
const keys = require('./keys');

module.exports = {
  development: {
    username: keys.postgresUsername,
    password: keys.postgresPassword,
    database: keys.postgresDevDbName,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'devannotation_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    "ssl": true,
        "dialectOptions": {
            "ssl": true
        }
  }
};