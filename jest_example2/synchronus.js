const numbers = [3, 4, 10, 20]
const getLessThanFive = num => num < 5
const getMoreThanTen = num => num > 10

// Passing getLessThanFive function into filter
const lesserThanFive = numbers.filter(getLessThanFive)

// Passing getMoreThanTen function into filter
const moreThanTen = numbers.filter(getMoreThanTen)

console.log(lesserThanFive);
console.log(moreThanTen);

const tenSecondsLater = _ => console.log('10 seconds passed!')

setTimeout(tenSecondsLater, 10000)
console.log('Start!')