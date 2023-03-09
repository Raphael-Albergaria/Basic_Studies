const timeOutTick = 1000
const timeOutClock = 1000

let momento = {
    minuto: 0,
    segundo: 0,

    prosseguir() {
        this.segundo++

        if (this.segundo > 60) {
            this.segundo = 0
            this.minuto++
        }
    }
}

const marcarDoRelogio = () => {
    console.log(`tick... (${momento.minuto}:${momento.segundo})`)
    momento.prosseguir()
}

let interval = setInterval(marcarDoRelogio, timeOutTick)

setTimeout(() => clearInterval(interval), timeOutClock)
