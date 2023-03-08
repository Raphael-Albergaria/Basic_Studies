const imoveis = []
let option = ''
let view = ''
let cadastroView = ''
do {
    let imoveisCadastrados = imoveis.length
    option = prompt(`
Quantidade de imóveis cadastrados: ${imoveisCadastrados}
[1] Cadastrar imóvel
[2] Exibir todos os imóveis
[3] Sair
`)

    switch (option) {
        case '1':
            const imovel = {}
            imovel.owner = prompt('Qual o nome do proprietário?')
            imovel.rooms = prompt('Quantos quartos possui?')
            imovel.bathrooms = prompt('Quantos banheiros possui?')
            imovel.garage = prompt('Tem garagem(sim/não)?')

            const confirmacao = confirm(
                'Salvar este imóvel?\n' +
                    'Proprietario: ' +
                    imovel.owner +
                    '\nQuantidades de quartos: ' +
                    imovel.rooms +
                    '\nQuantidade de banheiro: ' +
                    imovel.bathrooms +
                    '\nTem garagem? ' +
                    imovel.garage
            )
            if (confirmacao) {
                imoveis.push(imovel)
                alert('Imóvel cadastrado!')
            } else {
                alert('Voltando ao Menu principal...')
            }
            break
        case '2':
            for (let i = 0; i < imoveis.length; i++) {
                // alert(console.table(cadastro[i]))
                cadastroView +=
                    'Proprietario: ' +
                    imoveis[i].owner +
                    '\nQuantidades de quartos: ' +
                    imoveis[i].rooms +
                    '\nQuantidade de banheiro: ' +
                    imoveis[i].bathrooms +
                    '\nTem garagem: ' +
                    imoveis[i].garage
            }
            alert(cadastroView)
            break
        case '3':
            alert('Encerrando...')
            break

        default:
            alert('Opção incorreta')
            break
    }
} while (option !== '3')
