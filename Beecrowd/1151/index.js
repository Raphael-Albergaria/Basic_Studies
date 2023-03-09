var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const entrada = Number(lines[0])

let lastNumber = 0
let penultimateNumber = 0
let sequenceFibonacci = []

for (let i = 0; i < entrada; i++) {
    const nextNumber = lastNumber + penultimateNumber
    sequenceFibonacci.push(nextNumber)
    penultimateNumber = lastNumber
    lastNumber = nextNumber
    if (lastNumber === 0) penultimateNumber++
}

console.log(...sequenceFibonacci)
