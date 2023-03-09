const dayjs = require('dayjs')

const date = date => {
    const birthday = dayjs(date)
    const age = dayjs().diff(birthday, 'years')
    const yearNow = dayjs().get('year')
    console.log(`Você tem ${age} anos`)

    let nextBirthday = dayjs(date).set('year', yearNow)
    const nextMonth = nextBirthday.diff(dayjs(), 'month', true)
    const nextDay = nextBirthday.diff(dayjs(), 'day', true)
    console.log(nextMonth)
    console.log(nextDay)
    if (nextMonth === 0 && nextDay === 0)
        return console.log('Hoje você completa ano')
    else if (nextMonth < 0 || nextDay < 0) {
        nextBirthday = nextBirthday.add(1, 'year')
    }
    console.log(
        `Seu proximo aniversario é ${nextBirthday.format('DD/MM/YYYY')}`
    )
    console.log(
        `Faltam ${nextBirthday.diff(
            dayjs(),
            'day'
        )} dias para seu próximo aniversario`
    )
}

date('03/10/1994')
