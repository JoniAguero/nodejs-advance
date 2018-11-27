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

    /* Creamos un agente */

    const agent = await Agent.createOrUpdate({
        uuid: 'yyy',
        name: 'test',
        username: 'test',
        hostname: 'test',
        pid: 1,
        connected: true,
    }).catch(handleFatalError)

    const metric = await Metric.create(agent.uuid, {
        type: 'memory',
        value: 300
    }).catch(handleFatalError)

    console.log('--agent--');
    console.log(agent);

    console.log('--metric--');
    console.log(metric);

    const metrics = await Metric.findAgentByUuid(agent.uuid).catch(handleFatalError)
    console.log('--metrics--');
    console.log(metrics);
}

function handleFatalError(err){
    console.error(err.message);
    console.error(err.stack);
    process.exit(1)
}

run()