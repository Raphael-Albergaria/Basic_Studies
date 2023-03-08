let option = '5'
do {
    option = prompt(`Qual opção você escolhe:
    [1]Opção 1
    [2]Opção 2
    [3]Opção 3
    [4]Opção 4
    [5]Encerrar`)
    switch (option) {
        case '1':
            alert('Opção 1 selecionada')
            break
        case '2':
            alert('Opção 2 selecionada')

            break
        case '3':
            alert('Opção 3 selecionada')

            break
        case '4':
            alert('Opção 4 selecionada')

            break
        case '5':
            alert('O sistema está sendo encerrando')

            break
        default:
            alert('Operação inválida')
    }
} while (option != 5)
