'use strict'

const test = require('ava')
const request = require('supertest')

const server = require('../server')

/* Si usaramos solo ava, se usararía test.serial, pero cómo supertest trabaja con callbacks se utilizar la función cb */

test.serial.cb('/api/agents', t => {
  request(server)
    .get('/api/agents')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.falsy(err, 'should not return an error')
      let body = res.body
      t.deepEqual(body, {}, 'response body should be the expected')
      t.end()
    })
})