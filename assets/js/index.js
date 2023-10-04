const parametersEl = document.querySelector('.parameters')
const dateBtn = document.querySelector('.date')
const timeBtn = document.querySelector('.time')
let action = 'date'

getParameters()

setInterval(() => {
    getParameters()
}, 1000)

function getAction(nameAction) {
    const format = new Date()

    if (nameAction === 'time') {
        return format.toLocaleTimeString()
    } else if (nameAction === 'date') {
        return format.toLocaleDateString()
    }
}

dateBtn.addEventListener('click', getBtn('date'))

timeBtn.addEventListener('click', getBtn('time'))

function getBtn(nameBtn) {
    return function() {
        action = nameBtn
        getParameters()
    }
}

function getParameters() {
    parametersEl.textContent = getAction(action)
}