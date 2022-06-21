


function changePosition (data, from, to) {
  data.splice(to, 0, data.splice(from, 1)[0])
  return data
}

const data = [ 1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3 ];

console.log("\n6. Mova o sétimo elemento para a segunda posição.. \n")

console.log(changePosition(data, 6, 1))