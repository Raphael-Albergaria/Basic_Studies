let firstName, lastName, study, yearOfBirth, age

firstName = prompt('Qual é o seu primeiro nome?')
lastName = prompt('Digite seu sobrenome:')
study = prompt('Qual a sua área de estudo?')
yearOfBirth = prompt('Em que ano nasceu?')
age = 2023 - yearOfBirth

alert(`Recruta cadastrado com sucesso!\n
Nome completo: ${firstName} ${lastName}
Campo de Estudo: ${study}
Idade: ${age}`)

console.log(`Recruta: ${firstName} ${lastName}`)
console.log(`Área de estudo: ${study}`)
console.log(`Idade: ${age}`)
