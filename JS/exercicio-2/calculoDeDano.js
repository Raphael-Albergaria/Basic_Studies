let namePersonagem1 = prompt('Qual o nome do personagem de ataque?')
let attackForce = prompt(`Qual a foça de ataque do ${namePersonagem1}?`)

let namePersonagem2 = prompt('Qual o nome do personagem de defesa?')
let live = prompt(`Quantos pontos de vida o ${namePersonagem2} tem?`)
let defence = prompt(`Qual o poder de defesa do ${namePersonagem2}?`)
let shild = confirm(`O ${namePersonagem2} esse personagem possui escudo?`)

let damage = 0

if (attackForce > defence && shild == false) {
    damage = attackForce - defence
} else if (attackForce > defence && shild == true) {
    damage = (attackForce - dafance) / 2
}
live -= damage
prompt(` Resultado:
O personagem ${namePersonagem1}
Com força de ataque ${attackForce}
Teve um dano aplicado de: ${damage}

O personagem ${namePersonagem2}
${shild == true ? 'Tinha' : 'Não tinha'} esculdo
Levando um dano de ${damage}
Sua vida foi para ${live}.
`)
