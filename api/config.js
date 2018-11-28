'use strict'

const debug = require('debug')('versedb:api:db')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'versedb',
    username: process.env.DB_USER || 'joni',
    password: process.env.DB_PASS || 'joni',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s)
  },
  auth: {
    secret: process.env.SECRET || 'joni'
  }
}
