'use strict'

const db = require('../')

async function run(){
    const config = {
        database: process.env.DB_NAME || 'versedb',
        username: process.env.DB_USER || 'joni',
        password: process.env.DB_PASS || 'joni',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
    }

    const { Agent, Metric } = await db(config).catch(handleFatalError)

    const agent = await Agent.createOrUpdate({
        uuid: 'yyy',
        name: 'test',
        username: 'test',
        hostname: 'test',
        pid: 1,
        connected: true,
    }).catch(handleFatalError)

    console.log('--agent--');
    console.log(agent);
    
}

function handleFatalError(err){
    console.error(err.message);
    console.error(err.stack);
    process.exit(1)
}

run()