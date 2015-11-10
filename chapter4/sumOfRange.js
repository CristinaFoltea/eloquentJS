function sum(array) {
  return array.reduce(function (result, value) {
    return result += value
  }, 0)
}

function range(start, end, step) {
  step = step || 1
  var result = []
  if ( start > end ){
    while (start >= end){
      result.push(start)
      start += step
    }
  } else {
    while (start <= end){
      result.push(start)
      start += step
    }
  }
  return sum(result)
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
