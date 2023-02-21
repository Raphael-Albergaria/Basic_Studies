const mesesAno = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro'
]
console.log(mesesAno)
//---Incluir e retirar elementos---

//push - adicionar no final
mesesAno.push('Dezembro')
mesesAno.push('2023')
console.log(mesesAno)

//unshift - adicionar no inicio
mesesAno.unshift(2023)
console.log(mesesAno)

//pop - tira o ultimo elemento
let ultimoElemento = mesesAno.pop()
console.log(mesesAno)
console.log(ultimoElemento)

//shift - tira o primeiro elemento
ultimoElemento = mesesAno.shift()
console.log(mesesAno)
console.log(ultimoElemento)

//---Pesquisa---

//includes - verifica se tem um determinado elemento em um array
const inclui = mesesAno.includes('Janeiro')
console.log(inclui)

//indexOf - retorna o indice do elemento
const indexElement = mesesAno.indexOf('Junho')
console.log(indexElement)

//---Cortar e concatenar---

//slice - copia uma parte do array e salva em outro array
//slice(start, finish)
const primeiroSemestre = mesesAno.slice(0, 6)
const segundoSemestre = mesesAno.slice(-6)
const sementres = mesesAno.slice(0)

console.log(primeiroSemestre)
console.log(segundoSemestre)
console.log(sementres)

// concat - junta dois arrays em um novo array
const todosOsMeses = [2023].concat(primeiroSemestre, segundoSemestre)
console.log(todosOsMeses)

//Substituição dos elementos

//splice - remove um grupo de elementos e substitui por outro
//.splice(indice, quantidade a ser removida, *o que ira substituir*)
const mesSubstituido = todosOsMeses.splice(indexElement + 1, 1, 'Juno')
console.log(mesSubstituido)
console.log(todosOsMeses)

//---Percorrer array---
for (let index = 0; index < todosOsMeses.length; index++) {
    const element = todosOsMeses[index]
    console.log(`${element} se encontra na posição ${index}`)
}
