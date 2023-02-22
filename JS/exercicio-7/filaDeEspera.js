let option = 0
const filaDeEspera = []
do {
    let listaView = ''
    for (let index = 0; index < filaDeEspera.length; index++) {
        listaView += `\n${index + 1}° ${filaDeEspera[index]}`
    }
    option = prompt(`Fila de espera: ${listaView}
    \nQual opção desejada?
    [1] Novo paciente
    [2] Consultar paciente
    [3] Sair
    `)
    switch (option) {
        case '1':
            const novoPaciente = prompt('Digite o nome do proximo paciente:')
            filaDeEspera.push(novoPaciente)
            break
        case '2':
            let consulta = filaDeEspera.shift()
            // if (typeof consulta == 'string') {
            if (consulta) {
                alert(`${consulta} vai ser consultado`)
            } else {
                alert(`Não há pacientes na fila`)
            }
            break
        case '3':
            alert('Encerrando...')
            break

        default:
            alert('Opção invalida')
    }
} while (option != 3)
