var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let x = Number(lines[0])
let y = Number(lines[1])

if (y < x) {
    let temp = x
    x = y
    y = temp
}

let sum = 0
for (let i = x; i <= y; i++) {
    if (i % 13 !== 0) sum += i
}
console.log(sum)
