'use strict'

const agent = {
  id: 1,
  uuid: 'yyy-yyy-yyy',
  name: 'fixture',
  username: 'joni',
  hostname: 'test-host',
  pid: 0,
  connected: true,
  createdAt: new Date(),
  updatedAt: new Date()
}

const agents = [
  agent,
  extend(agent, { id: 2, uuid: 'yyy-yyy-yyw', connected: false, username: 'test' }),
  extend(agent, { id: 3, uuid: 'yyy-yyy-yyx' }),
  extend(agent, { id: 4, uuid: 'yyy-yyy-yyz', username: 'test' })
]

function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: agent, /* Devuelvo el objeto agent */
  all: agents, /* Devuelvo el array de objetos agent */
  connected: agents.filter(a => a.connected), /* Devuelvo objetos agent que cumpla condicion */
  platzi: agents.filter(a => a.username === 'platzi'), /* Devuelvo objetos agent que cumpla condicion */
  byUuid: id => agents.filter(a => a.uuid === id).shift(), /* Devuelvo objetos agent que cumpla condicion - shift-> retorna el primer elemento */
  byId: id => agents.filter(a => a.id === id).shift() /* Devuelvo objetos agent que cumpla condicion - shift-> retorna el primer elemento */
}
