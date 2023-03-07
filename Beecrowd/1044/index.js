var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const valores = lines[0].split(' ')

const a = Number(valores[0])
const b = Number(valores[1])

if (a % b === 0 || b % a === 0) {
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}
