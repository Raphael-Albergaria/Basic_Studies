function creatLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}
function creatInputs(id, name, value = '', type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTachBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', () => {
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = `inputRow-${rowIndex}`
    newRow.className = 'inputRow'

    const tachNameLabel = creatLabel('Nome: ', `techName-${rowIndex}`)
    const tachNameInput = creatInputs(`techName-${rowIndex}`, 'techName')

    const expLabel = creatLabel('Experiência: ')
    const id1 = `expRadio-${rowIndex}.1`
    const expRadio1 = creatInputs(
        id1,
        `techExp${rowIndex}`,
        '0-2 anos',
        'radio'
    )
    const labelRadio1 = creatLabel('0-2 anos', id1)

    const id2 = `expRadio-${rowIndex}.2`
    const expRadio2 = creatInputs(
        id2,
        `techExp${rowIndex}`,
        '3-4 anos',
        'radio'
    )
    const labelRadio2 = creatLabel('3-4 anos', id2)

    const id3 = `expRadio-${rowIndex}.3`
    const expRadio3 = creatInputs(id3, `techExp${rowIndex}`, '5+ anos', 'radio')
    const labelRadio3 = creatLabel('5+ anos', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', () => {
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        tachNameLabel,
        tachNameInput,
        expLabel,
        expRadio1,
        labelRadio1,
        expRadio2,
        labelRadio2,
        expRadio3,
        labelRadio3,
        removeRowBtn
    )

    stackInputs.appendChild(newRow)
})
form.addEventListener('submit', ev => {
    ev.preventDefault()
    const fullnameInput = document.getElementById('devName')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRows.forEach(row => {
        const techName = document.querySelector(
            `#${row.id} input[name="techName"]`
        ).value
        const techExp = document.querySelector(
            `#${row.id} input[type="radio"]:checked`
        ).value
        technologies.push({ name: techName, exp: techExp })
    })

    const newDev = { devName: fullnameInput.value, technologies }
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    fullnameInput.value = ''
    inputRows.forEach(row => {
        row.remove()
    })
    console.table(developers)
})
