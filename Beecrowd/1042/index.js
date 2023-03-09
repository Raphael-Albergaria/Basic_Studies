var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const valores = lines[0].split(' ')
let numCrecente = []
valores.forEach(num => {
    numCrecente.push(Number(num))
})

numCrecente = numCrecente.sort((a, b) => a - b)

numCrecente.forEach(num => {
    console.log(num)
})
console.log()
valores.forEach(num => {
    console.log(num)
})
