const personagens = [
    { nivel: 42, nome: 'Thrall', raca: 'Geonosiano', classe: 'Guerreiro' },
    { nivel: 28, nome: 'Ahsoka', raca: 'Togruta', classe: 'Jedi' },
    { nivel: 35, nome: 'Varok', raca: 'Twi´leks', classe: 'Rebelde' },
    { nivel: 35, nome: 'Uther', raca: 'Humano', classe: 'Paladino' },
    { nivel: 26, nome: 'Jaina', raca: 'Jawas', classe: 'Guerreiro' },
    { nivel: 39, nome: 'Tyrande', raca: 'Troll', classe: 'Rebelde' },
    { nivel: 29, nome: 'Muradin', raca: 'Anão', classe: 'Guerreiro' }
]
console.table(personagens)
//Map

// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

// const racas = []

// for (let i = 0; i < personagens.length; i++) {
//     racas.push(personagens[i].raca)
// }
//console.log(racas)

const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

console.log(nomes)

//Filter

// const guerreiros = []
// for (let i = 0; i < personagens.length; i++) {
//     if (personagens[i].classe === 'Guerreiro') {
//         guerreiros.push(personagens[i])
//     }
// }

const guerreiros = personagens.filter(function (personagem) {
    return personagem.classe === 'Guerreiro'
})
console.log(guerreiros)

//Reduce

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)

const classes = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.classe]) {
        valorAcumulado[personagem.classe].push(personagem)
    } else {
        valorAcumulado[personagem.classe] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(classes)
console.table(personagens)

//Sort

personagens.sort(function (a, b) {
    return b.nivel - a.nivel
})

const nomesPersonagens = personagens.slice().sort(function (a, b) {
    if (a.nome > b.nome) return 1
    if (a.nome < b.nome) return -1
    return 0
})
console.table(personagens)
console.table(nomesPersonagens)
