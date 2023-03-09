var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

const letras = [...lines[0]]
const vogais = []
for (let i = 0; i < letras.length; i++) {
    if (
        letras[i] === 'a' ||
        letras[i] === 'e' ||
        letras[i] === 'i' ||
        letras[i] === 'o' ||
        letras[i] === 'u'
    ) {
        vogais.push(letras[i])
    }
}
const vogaisReverse = [...vogais].reverse()
let v = 0
let f = 0
for (let i = 0; i < vogais.length; i++) {
    if (vogais[i] === vogaisReverse[i]) v++
    else f++
}
if (f > 0) console.log('N')
else console.log('S')

// const vogaisReverse = letras.reverse()
