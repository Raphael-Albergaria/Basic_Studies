var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const valores = lines[0].split(' ')
let numeros = []
valores.forEach(num => {
    numeros.push(Number(num))
})

numeros = numeros.sort((a, b) => a - b)
numeros.forEach(num => {
    console.log(num)
})

console.log()
numeros = numeros.sort((a, b) => {
    if (a > b) return -1
    if (a < b) return 1
    return 0
})
numeros.forEach(num => {
    console.log(num)
})
