var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const valores = lines[0].split(' ')

const a = Number(valores[0])
const b = Number(valores[1])
const c = Number(valores[2])

const delta = Math.pow(b, 2) - 4 * a * c
const divisao = 2 * a
if (divisao <= 0 || delta < 0) {
    console.log(`Impossivel calcular`)
} else {
    const r1 = (-b + Math.sqrt(delta)) / divisao
    const r2 = (-b - Math.sqrt(delta)) / divisao
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
}
