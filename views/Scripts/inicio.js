const os = require('os')

const arquitectura = os.arch().toString()
const cpus = os.cpus()
const SO = os.platform()
const sistema = os.version()

module.exports = {
    arquitectura,
    cpus,
    SO,
    sistema
}