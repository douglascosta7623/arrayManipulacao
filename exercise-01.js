let data = [ 1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3 ];

let dataCrescent = data.sort((a,b) => {
  return a-b
})

console.log("1. Classifique a lista em ordem crescente. \n")
console.log(dataCrescent)