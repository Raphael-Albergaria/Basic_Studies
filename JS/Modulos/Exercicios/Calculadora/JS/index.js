import calculate from './calculate.js'
import copyToClipboard from './copyToClipboard.js'
import {
    handleButtonPress,
    handleClearButton,
    handleType
} from './keyHandlers.js'
import theameSwitcher from './theameSwitcher.js'

document.querySelectorAll('.charKey').forEach(charKeyBtn => {
    charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handleClearButton)
document.getElementById('input').addEventListener('keydown', handleType)
document.getElementById('equal').addEventListener('click', calculate)
document
    .getElementById('copyToClipboard')
    .addEventListener('click', copyToClipboard)
document
    .getElementById('themeSwitcher')
    .addEventListener('click', theameSwitcher)
