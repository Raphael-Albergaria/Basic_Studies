let car1 = prompt('Qual o nome do primeiro carro?')
let speedCar1 = prompt('Qual a velocidade do promeiro carro?')
let car2 = prompt('Qual o nome do segundo carro?')
let speedCar2 = prompt('Qual a velocidade do segundo carro?')

if (speedCar1 > speedCar2) {
    alert(`O ${car1} é mais rapido do que o ${car2}`)
} else if (speedCar1 < speedCar2) {
    alert(`O ${car2} é mais rapido do que o ${car1}`)
} else {
    alert(`O ${car1} e ${car2} tem a mesma velocidade`)
}
