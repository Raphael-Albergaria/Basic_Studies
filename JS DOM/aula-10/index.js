document.getElementById('sessionBtn').addEventListener('click', () => {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', () => {
    const info = sessionStorage.getItem('info')
    const input = document.getElementById('session')
    input.value = info
})

document.getElementById('localBtn').addEventListener('click', () => {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', () => {
    const text = localStorage.getItem('text')
    const input = document.getElementById('local')
    input.value = text
})

document.getElementById('cookieBtn').addEventListener('click', () => {
    const input = document.getElementById('cookie')
    const cookie = `info=${input.value};`
    const expires = `expires=${new Date(2023, 3, 4)};`
    const path = `path=/;`
    document.cookie = cookie + expires + path
})

document.getElementById('cookie2Btn').addEventListener('click', () => {
    const input = document.getElementById('cookie2')
    const cookie = `text=${input.value};`
    const expires = `expires=${new Date(2023, 2, 4)};`
    const path = `path=/;`
    document.cookie = cookie + expires + path
})
console.log(document.cookie)
