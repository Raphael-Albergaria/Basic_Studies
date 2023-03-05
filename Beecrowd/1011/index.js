var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const a = Number(lines[0])
const pi = 3.14159
const volume = (4.0 / 3) * pi * (a * a * a)

console.log(`VOLUME = ${volume.toFixed(3)}`)
