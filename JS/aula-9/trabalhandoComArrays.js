const arr = [
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
console.log(arr)

//push - adicionar no final
arr.push('Dezembro')
console.log(arr)

//unshift - adicionar no inicio
arr.unshift(2023)
console.log(arr)

//pop - tira o ultimo elemento
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift - tira o primeiro elemento
ultimoElemento = arr.shift
console.log(arr)
