var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const quantidade = Number(lines[0])

for (let i = 1; i <= quantidade; i++) {
    const semEspaco = lines[i].trim()
    const letras = semEspaco.split(' ')
    let palavraOculta = ''
    letras.forEach(element => {
        if (element === '') {
        } else palavraOculta += element[0]
    })
    console.log(palavraOculta)
}
// console.log(letras)
// const espaco = ' '
// const teste = console.log(typeof espaco)
// console.log('')
// console.log()
// console.log('sssss')
