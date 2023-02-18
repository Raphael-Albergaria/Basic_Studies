let quantia = parseFloat(prompt('Qual é a quantidade de Dinheiro?'))
let optio
do {
    option = prompt(`Você possui ${quantia}R$ o que gostaria de fazer?
    [1]Adicionar dinheiro
    [2]Remover dinheiro
    [3]Sair do sistema`)

    switch (option) {
        case '1':
            quantia += parseFloat(prompt('Quanto gostaria de adcionar?'))
            break
        case '2':
            quantia -= parseFloat(prompt('Quanto gostaria de retirar?'))
            break
        case '3':
            alert('Encerrando o programa')

            break
        default:
            alert('Operação inválida')
    }
} while (option != 3)
