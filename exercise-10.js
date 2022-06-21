const data = [ 1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3 ];

const parametro = Number(((data.length)/2).toFixed(0))
const paramentroAnt = parametro - 2
const paramentroNext = Number(parametro + 1)
console.log(paramentroAnt)
console.log(paramentroNext)

console.log(data.slice(paramentroAnt,paramentroNext));