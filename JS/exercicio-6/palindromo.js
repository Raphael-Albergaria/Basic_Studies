let palavra = prompt('Escreva uma palavra')
let palavraInvertida = ''
// let isPolidromo
// for (let i = tamanhoDaPalavra; i >= 0; i--) {
//     palavraAoContrario += palavra[i]
// }
// prompt(palavraAoContrario)
for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += `${palavra[i]}`
}
if (palavra !== palavraInvertida) {
    alert(`A palavra ${palavra} não é plídromo:
    ${palavra}
    ${palavraInvertida}`)
} else {
    alert(`A palavra ${palavra} é um polídromo!`)
}
