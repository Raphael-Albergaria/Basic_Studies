const numero = parseFloat(prompt('Qual o número da tabuada que você quer?'))
let tabuada = ''

for (let i = 1; i <= 20; i++) {
    tabuada += `${numero} x ${i} = ${numero * i}\n`
}
alert(`A tabuada de ${numero}:
${tabuada}`)
