const debug = require('debug')('vesedb:db:setup')

// Objeto de configuración de la Base de Datos
module.exports = function (init = true) {
    return {
        database: process.env.DB_NAME || 'versedb',
        /* Nombre de la DB  */
        username: process.env.DB_USER || 'joni',
        /* Usuario          */
        password: process.env.DB_PASS || 'joni',
        /* Contraseña       */
        local: process.env.DB_HOST || 'localhost',
        /* Dirección IP     */
        dialect: 'postgres',
        /* Nombre del gestor de DBs a usar en el proyecto */
        logging: s => debug(s),
        setup: init, /* Restauración de la Database */
        operatorsAliases: false
    }
}