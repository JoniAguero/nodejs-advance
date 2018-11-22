'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  AgentModel.hasMany(MetricModel) /* hasMany -> AgentModel tiene muchas MetricModel */
  MetricModel.belongsTo(AgentModel) /* belongsTo -> MetricModel pertener a un AgentModel */

  await sequelize.authenticate() /* Se conecta a la BD. authenticate es una promise */

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
