'use strict'

const test = require('ava')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

let config = {
    logging() {}
}
/* Imito el modelo de Agent en index */
let MetricStub = {
    belongsTo: sinon.spy()
}

let AgentStub = null
let db = null
let sandbox = sinon.createSandbox()

test.beforeEach(async () => {
    sandbox = sinon.createSandbox()
    /* Imito el modelo de Agent en index */
    AgentStub = {
        hasMany: sandbox.spy()
    }
    /* proxyquire -> me permite hacer require un módulo y sobreescribirlos */
    const setupDatabase = proxyquire('../', {
        './models/agent': () => AgentStub,
        './models/metric': () => MetricStub
    })

    db = await setupDatabase(config)
})

test.afterEach(() => {
    sandbox && sandbox.restore()
})

test('Agent', t => {
    t.truthy(db.Agent, 'Agent service should exist')
})
/* test.serial -> Garantiza que nuestro entorno de Stub no esté saturado. Indicamos que los test se haran en serie. */
test.serial('Setup', t => {
    t.true(AgentStub.hasMany.called, 'AgentModel.hasMany was executed') /* Test que hasMany fue ejecutada */
    t.true(AgentStub.hasMany.calledWith(MetricStub), 'Argument should be the MetricModel')  /* Test que hasMany fue ejecutada con el argumento*/
    t.true(MetricStub.belongsTo.called, 'MetricModel.belongsTo was executed')
    t.true(MetricStub.belongsTo.calledWith(AgentStub), 'Argument should be the AgentModel')
})