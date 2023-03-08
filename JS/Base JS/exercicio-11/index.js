const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}
console.log(average(5, 2))

const weightedAverage = (...entries) => {
    const sum = entries.reduce(
        (accum, { number, weight }) => accum + number * (weight ?? 1),
        0
    )
    const weightSum = entries.reduce(
        (accum, entries) => accum + (entries.weight ?? 1),
        0
    )
    return sum / weightSum
}
console.log(
    weightedAverage(
        { number: 9, weight: 3 },
        { number: 7 },
        { number: 10, weight: 1 }
    )
)

const median = (...number) => {
    const orderedNumbers = [...number].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    } else {
        const firstMedian = orderedNumbers[middle - 1]
        const secondMedian = orderedNumbers[middle]
        return average(firstMedian, secondMedian)
    }
}
console.log(median(1, 2, 3, 4, 5, 6, 7, 8))
console.log(median(8, 6, 5, 2, 3, 1, 4, 7))

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    // console.table(quantities)
    return quantities[0][0]
}

console.log(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))
