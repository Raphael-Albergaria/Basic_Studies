const nomeTurista = prompt('Qual seu nome?')
let resposta = prompt('Você já visitou alguma cidade?(sim/não)')
let quantidadeDeCidades = 0
let cidadesVisitadas = ''
while (resposta === 'sim') {
    cidadesVisitadas += prompt('Qual é o nome da cidade que visitou?') + '\n'
    quantidadeDeCidades++
    resposta = prompt('Vitou outra cidade?(sim/não)')
}
alert(`Quantidade de Cidades visitadas:
${nomeTurista} visitou ${quantidadeDeCidades}:
${cidadesVisitadas} `)
