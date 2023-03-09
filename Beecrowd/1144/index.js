var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let x = Number(lines[0])

let a = 1
let b = 1
let c = 1

for (let i = 1; i <= x; i++) {
    a = i
    b = a * a
    c = a * b
    console.log(`${a} ${b} ${c}`)
    b++
    c++
    console.log(`${a} ${b} ${c}`)
}
