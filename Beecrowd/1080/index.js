var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const numero = [...lines]

let maior = 0
let posicao = 0
for (let i = 1; i <= 100; i++) {
    const index = i - 1
    if (Number(numero[index]) > maior) {
        maior = numero[index]
        posicao = i
    }
}
console.log(maior)
console.log(posicao)
