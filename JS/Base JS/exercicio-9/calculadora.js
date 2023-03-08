function areaTriangulo() {
    const base = prompt('Qual a base do Triângulo?')
    const height = prompt('Qual a altura do Triângulo?')
    return (base * height) / 2
}
function areaRetangulo() {
    const base = prompt('Qual a base do Retângulo?')
    const height = prompt('Qual a altura do Triângulo?')
    return base * height
}
function areaQuadrado() {
    const side = prompt('Qual o lado do Quadrado?')
    return side * side
}
function areaTrapezio() {
    const biggerBase = parseFloat(prompt('Qual a base maior do Trapézio?'))
    const minorBase = parseFloat(prompt('Qual a base menor do Trapézio?'))
    const height = parseFloat(prompt('Qual a altura do Trapézio?'))
    return ((biggerBase + minorBase) * height) / 2
}
function areaCirculo() {
    const pi = 3.14
    const radius = prompt('Qual o raio do Círculo?')
    return pi * (radius * radius)
}
function viewMenu() {
    return prompt(
        'Bem vindo(a) a Calculadora Geométrica\n' +
            'Qual área gostaria de calcular?\n\n' +
            '[1] Triângulo \n' +
            '[2] Retângulo\n' +
            '[3] Quadrado\n' +
            '[4] Trapézio\n' +
            '5] Círculo\n' +
            '[6] Sair'
    )
}
function executar() {
    let option = ''
    do {
        let resultado
        option = viewMenu()

        switch (option) {
            case '1':
                resultado = areaTriangulo()
                break
            case '2':
                resultado = areaRetangulo()
                break
            case '3':
                resultado = areaQuadrado()
                break
            case '4':
                resultado = areaTrapezio()
                break
            case '5':
                resultado = areaCirculo()
                break
            case '6':
                alert('Encerrando...')
                break

            default:
                alert('Opçao incorreta')
        }
        if (resultado) {
            alert('Resultado: ' + resultado)
        }
    } while (option !== '6')
}
executar()
