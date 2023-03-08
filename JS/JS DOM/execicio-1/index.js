function escalarJogador() {
    let position = document.getElementById('position').value

    let name = document.getElementById('name').value

    let number = document.getElementById('number').value

    const confirmation = confirm(
        `Deseja confirmar a remoção do jogador:\nNome: ${name} \n Posição: ${position} \nNumero: ${number} ?`
    )

    if (confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = `player-${number}`
        playerItem.innerText = `${position}: ${name}(${number})`
        teamList.appendChild(playerItem)
    }

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
}
function removerJogador() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById(`player-${number}`)

    const confirmation = confirm(
        `Deseja confirmar a remoção do jogador:\nNome: ${playerToRemove.innerText} ?`
    )
    if (confirmation) {
        // document.getElementById('teamList').removeChild(playerToRemove)
        playerToRemove.remove()
        document.getElementById('numberToRemove').value = ''
    }
}
