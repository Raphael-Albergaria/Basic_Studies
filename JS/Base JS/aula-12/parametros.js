function dobro(x) {
    alert('O dobro de ' + x + ' é ' + x * 2)
}
// dobro(5)
// dobro(7)
function dizerOla(nome = 'mundo') {
    alert('Ola ' + nome)
}

// dizerOla('Raphael')
// dizerOla()
function soma(a, b) {
    alert('O resultado da soma é ' + (a + b))
}

// soma(2, 3)
function criarUsuario(nome, email, senha, tipo = admin) {
    const usuario = {
        nome, //nome = nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}
criarUsuario('Raphael', 'hraphael.albergaria@email.com', '123456')

function muitosParametros(nome, telefone, endereco, email, senha) {
    //...
}
