const data = [ 1, 3, 9, 12, 19, 12, 20, 40, 90, 88, 77, 4, 8, 7, 3, 4, 3 ];

function cutArr(dataCut, len){
  let cut = [], i = 0, n = dataCut.length
  while (i < n){
    cut.push(dataCut.slice(i, i += len))
  }
  return cut
}

const newArr = data.sort((a,b) => a-b);
console.log(cutArr(data, (data.length/2)))