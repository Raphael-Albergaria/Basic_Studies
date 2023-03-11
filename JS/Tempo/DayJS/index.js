const dayjs = require('dayjs')

const birthday = date => {
    const birthday = dayjs(date)
    const today = dayjs()
    const age = today.diff(birthday, 'years')
    console.log(`\nVocê tem ${age} anos`)

    const nextBirthday = birthday.add(age + 1, 'year')
    console.log(
        `Seu próximo aniversario é ${nextBirthday.format('DD/MM/YYYY')}`
    )
    const nextDaysToBirthday = nextBirthday.diff(dayjs(), 'day')
    console.log(
        `Faltam ${nextDaysToBirthday} dias para seu próximo aniversario\n`
    )
}

birthday('1994/03/10')
