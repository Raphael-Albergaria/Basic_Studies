function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation =
        sectionElement.children.passwordConfirmation.value
    if (password !== passwordConfirmation) {
        alert('Senha confirmada diferente')
    } else {
        alert(`Usuario ${username} cadastrado com sucesso!`)
    }
}
function removeListener() {
    button.removeEventListener('click', register)
    alert('Event removed')
}

const button = document.getElementById('register-button')
button.addEventListener('click', register)

const removButton = document.getElementById('remove-button')
removButton.addEventListener('click', removeListener)

button.addEventListener('mouseover', ev => {
    console.log(ev.currentTarget)
})
