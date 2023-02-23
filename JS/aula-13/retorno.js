function calcularMedia(a, b) {
    const media = (a = b) / 2
    return media
}

const resultado = calcularMedia(2, 3)
console.log(resultado)

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}
console.log(criarProduto('Notebook Dell', 1300))

let pokemon = 'Charmander'

function evoluir() {
    pokemon = 'Charmeleon'
}
console.log(pokemon)
evoluir()
console.log(pokemon)

// function criarAnimal() {
//     let animal = 'Gato'
// }
// criarAnimal()
// console.log(animal)

function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = 'Aprovado'
    } else {
        var aprovado = false
        let situacao = 'Reprovado'
    }
    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}

avaliarNota(83)
avaliarNota(49)
