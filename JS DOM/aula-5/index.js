function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if (password !== passwordConfirmation) {
        alert('Senha de confirmação diferente!')
    } else {
        alert(`Usuario ${username} cadastrado com sucesso!`)
    }
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
    document.getElementById('passwordConfirmation').value = ''
    console.log({ username, password, passwordConfirmation })
}
