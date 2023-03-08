const listaDeVagas = [
    {
        nome: 'Mecânico',
        descricao: 'Manutenção de automoveis',
        dataLimite: '12/03/2023',
        candidatos: []
    },
    {
        nome: 'Desenvolvedor',
        descricao: 'Desenvolvimento Web',
        dataLimite: '12/03/2023',
        candidatos: []
    },
    {
        nome: 'Professor',
        descricao: 'Aula para o Fundamental',
        dataLimite: '12/03/2023',
        candidatos: []
    },
    {
        nome: 'Chaveiro',
        descricao: 'Abrir portas',
        dataLimite: '12/03/2023',
        candidatos: []
    },
    {
        nome: 'Manicure',
        descricao: 'Fazer unha',
        dataLimite: '12/03/2023',
        candidatos: []
    }
]
function exibirVagas() {
    const vagasEmTexto = listaDeVagas.reduce(function (
        textoFinal,
        vaga,
        indice
    ) {
        textoFinal += indice + '. '
        textoFinal += vaga.nome
        textoFinal += ' (' + vaga.candidatos.length + ' candidatos)\n'
        return textoFinal
    },
    '')
    alert(vagasEmTexto)
}
function novaVaga() {
    const nome = prompt('Informe um nome para vaga:')
    const descricao = prompt('Informe uma descrição parvaga:')
    const dataLimite = prompt('Informe uma data limite para vaga (dd/mm/aaaa):')
    const confirmacao = confirm(
        'Você confirma a criação da vaga com essas informações?' +
            '\nNome: ' +
            nome +
            '\nDescrição: ' +
            descricao +
            '\nData Limite: ' +
            dataLimite
    )
    if (confirmacao) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        listaDeVagas.push(novaVaga)
        alert('Vaga criada.')
    }
}
function exibirUmaVaga() {
    const indice = prompt('Informe o indice da vaga que deseja exibir:')
    if (indice >= listaDeVagas.length || indice < 0) {
        alert('Vaga não encontrada.')
    } else {
        const vaga = listaDeVagas[indice]

        const candidatosEmTexto = vaga.candidatos.reduce(function (
            textoFinal,
            candidatos
        ) {
            return (textoFinal += '\n- ' + candidatos)
        },
        '')
        alert(
            'Vaga n°' +
                indice +
                '\nNome: ' +
                vaga.nome +
                '\nDescricao: ' +
                vaga.descricao +
                '\nData Limite: ' +
                vaga.dataLimite +
                '\nQuantidade de candidatos: ' +
                vaga.candidatos.length +
                '\nCandidatos inscritos: ' +
                candidatosEmTexto
        )
    }
}

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do candidato(a):')
    const indice = prompt('Informe o indice de vaga:')
    const vaga = listaDeVagas[indice]
    const confirmacao = confirm(
        'Deseja increver o candidato ' +
            candidato +
            ' na vaga ' +
            indice +
            '?\n' +
            'Nome: ' +
            vaga.nome +
            '\nDescrição: ' +
            vaga.descricao +
            '\nData Limite: ' +
            vaga.dataLimite
    )
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert('Inscrição concluida')
    }
}
function excluirUmaVaga() {
    const indice = prompt('Qual o indice da vaga que deseja excluir?')

    if (indice >= listaDeVagas.length || indice < 0) {
        alert('Vaga não encontrada.')
    } else {
        const vaga = listaDeVagas[indice]

        const confirmacao = confirm(
            'Deseja mesmo excluir a vaga n° ' +
                indice +
                '?\n' +
                'Nome: ' +
                vaga.nome +
                '\nDescrição: ' +
                vaga.descricao +
                '\nData Limite: ' +
                vaga.dataLimite
        )
        if (confirmacao) {
            listaDeVagas.splice(indice, 1)
            alert('Vaga excluida.')
        }
    }
}
function menu() {
    option = prompt(
        'Sistema de Vagas de Emprego\n\nEscolha uma das opções:\n[1] Listar vagas disponíveis\n[2] Criar um nova vaga\n[3] Visualizar uma vaga\n[4] Inscrever um candidato em uma vaga\n[5] Excluir uma vaga\n[6] Sair'
    )
    return option
}
function executar() {
    let option = ''
    do {
        option = menu()
        switch (option) {
            case '1':
                exibirVagas()
                break
            case '2':
                novaVaga()
                break
            case '3':
                exibirUmaVaga()
                break
            case '4':
                inscreverCandidato()
                break
            case '5':
                excluirUmaVaga()
                break
            case '6':
                alert('Encerrando...')
                break

            default:
                alert('Opção invalida')
                break
        }
    } while (option !== '6')
}
executar()
