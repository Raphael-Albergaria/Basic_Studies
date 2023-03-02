function useLightTheme() {
    document.body.classList.replace('is-dark', 'is-light')
    // document.body.style.color = '#212529'
    // document.body.style.backgroundColor = '#f1f5f9'
}
function useDarkTheme() {
    document.body.classList.replace('is-light', 'is-dark')
    // document.body.style.color = '#f1f5f9'
    // document.body.style.backgroundColor = '#212529'
}
function switchTheme() {
    document.body.classList.toggle(`is-light`)
    document.body.classList.toggle(`is-dark`)
    // const classBody = document.body.classList

    // if (classBody.contains('is-light')) {
    //     document.body.classList.replace('is-light', 'is-dark')
    // } else if (classBody.contains('is-dark')) {
    //     document.body.classList.replace('is-dark', 'is-light')
    // }
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)

document.getElementById('darkBtn').addEventListener('click', useDarkTheme)

document.getElementById('switchBtn').addEventListener('click', switchTheme)
