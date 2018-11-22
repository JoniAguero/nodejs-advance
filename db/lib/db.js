'use strict'

/* Se implementa como Singleton -> Cada vez que lo llamó, devuelve solo una instancia */

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabase(config) {
    if (!sequelize) {
        sequelize = new Sequelize(config)
    }
    return sequelize
}