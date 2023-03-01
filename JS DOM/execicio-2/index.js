function creatLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}
function creatInputs(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTachBtn = document.getElementById('addTachBtn')
const form = document.getElementById('devForm')
const developers = []
const inputRows = 0

addTachBtn.addEventListener('click', ev => {
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = `inputRow-${rowIndex}`
    newRow.className = 'inputRow'

    const tachNameLabel = creatLabel('Nome: ')
    const tachNameInput = creatInputs()
})

function newTechnology() {
    const technologies = document.getElementById('technologies')
    const technology = document.createElement('div')
    technology.className = 'technology'
    const labelTechnology = document.createElement('label')
    labelTechnology.htmlFor = 'nameTechnology'
    labelTechnology.innerText = 'Nome da tecnologia'
    const inputTechnology = document.createElement('input')
    inputTechnology.type = 'text'
    inputTechnology.name = 'nameTechnology'
    inputTechnology.id = 'nameTechnology'

    technology.appendChild(labelTechnology)
    technology.appendChild(inputTechnology)
    technologies.appendChild(technology)
    const quantidade = technologies.childElementCount
    console.log(quantidade)
}

form.addEventListener('submit', ev => {
    ev.preventDefault()
    newTechnology()
})
