function min(a, b) {
  if (a === b){
    return 'they are equal'
  }
  return a < b ? a : b
}
console.log(min(2, 5))
console.log(min(7, 5))
console.log(min(6, 6))
console.log(min('hello', 'hello'))
