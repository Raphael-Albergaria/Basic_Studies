var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const numero = Number(lines[0])

for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) console.log(`${i}^2 = ${i * 2}`)
}
