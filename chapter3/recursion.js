function isEven(number) {
  number = Math.abs(number)
  if ( number === 1){
    return 'Odd'
  } else if ( number === 0){
    return 'Even'
  } else {
    number -= 2
     return isEven(number)
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
