let option = 0
const pilhaDeCartas = []
do {
    let pilhaView = ''
    for (let index = 0; index < pilhaDeCartas.length; index++) {
        pilhaView += `\n${pilhaDeCartas[index]}`
    }
    option = prompt(`Cartas no Baralho: \n${pilhaView}
    \nQual opção desejada?
    [1] Adicionar carta
    [2] Retirar carta
    [3] Sair
    `)
    switch (option) {
        case '1':
            const novaCarta = prompt('Qual carta gostaria de adicionar?')
            pilhaDeCartas.unshift(novaCarta)
            break
        case '2':
            const cartaRetirada = pilhaDeCartas.shift()
            if (!cartaRetirada) {
                alert('Não há carta no baralho')
            } else {
                alert(`${cartaRetirada} foi a carta retirada`)
            }
            break
        case '3':
            break

        default:
            alert('Opção invalida')
    }
} while (option != 3)
