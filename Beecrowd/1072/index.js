var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const quantidade = Number(lines[0])
let valorIn = 0
let valorOut = 0

for (i = 1; i <= quantidade; i++) {
    const number = Number(lines[i])
    if (number >= 10 && number <= 20) {
        valorIn++
    } else {
        valorOut++
    }
}
console.log(`${valorIn} in`)
console.log(`${valorOut} out`)
