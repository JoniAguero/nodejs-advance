'use strict'

const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')
const config = require('./config-setup')()

const prompt = inquirer.createPromptModule()

async function setup () {
  let flag = false

  process.argv.forEach((parametro, index) => {
  console.log(`[${index}] ${parametro}`)

  // Fragmento del código número dos:
  if (process.argv[index] == '--yes') {
    console.log(`El parámetro "${parametro}" se encontró en el indice [${index}]`)
  }
})
  

  process.argv.forEach(e => {
    if (e === '--yes') {
      flag = true
    }
  })

  if (flag === false) {
    // Pregunta en la consola
    const answer = await prompt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'This will destroy your database, are you sure?'
      }
    ])
    
    // Si la respuesta es falsa (es negativa), no pasa nada
    // Si la respuesta es verdadera (es positia), re-crea la DB
    if (!answer.setup) {
      returnconsole.log('Nothing happended :)')
    }
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
