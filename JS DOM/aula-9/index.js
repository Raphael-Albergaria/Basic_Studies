const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', () => {
    input.value = input.value === '' ? 'Olá mundo!' : ''
    //Valor atual
    console.log(input.value)
    //Valor inicial
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', () => {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    // input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', () => {
    input.placeholder = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', () => {
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', () => {
    let data = input.dataset.somethingElse
    console.log(data)
    data = 'Algum outro valor'
    console.log(data)
})
