'use strict'

const debug = require('debug')
const db = require('./')
async function setup () {
  const config = {
    database: process.env.DB_NAME || 'versedb',
    username: process.env.DB_USER || 'joni',
    host: process.env.DB_HOST || 'localhost',
    port: '5432',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}
