const metro = prompt(`Quantos metros gostatia de converter?`)
const unidMedida = prompt(`Para qual a unidade de medida gostaria de converter?
- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)`)

switch (unidMedida) {
    case 'mm':
        alert(`${metro}m = ${metro * 1000}${unidMedida}`)
        break
    case 'cm':
        alert(`${metro}m = ${metro * 100}${unidMedida}`)
        break
    case 'dm':
        alert(`${metro}m = ${metro * 10}${unidMedida}`)
        break
    case 'am':
        alert(`${metro}m = ${metro / 10}${unidMedida}`)
        break
    case 'hm':
        alert(`${metro}m = ${metro / 100}${unidMedida}`)
        break
    case 'km':
        alert(`${metro}m = ${metro / 1000}${unidMedida}`)
        break
    default:
        alert('Opção inválida')
}
