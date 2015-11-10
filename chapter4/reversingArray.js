function reverseArray(array) {
  var result = []
  while(array.length > 0){
    result.push(array.pop())
  }
  return result
}

function reverseArrayInPlace(array) {
  for (var i = 0; i <= Math.floor((array.length - 1)/2); i++){
    var keep = array[i]
    array[i] = array[array.length - i - 1]
    array[array.length - i - 1] = keep
  }
  return array
}

var start1 = +new Date();
console.log(reverseArray([1, 2, 4, 4, 5, 6, 7, 7]));
var end1 =  +new Date();
var diff1 = end1 - start1;
console.log(diff1 + " 1st");//>>20ms

var start2 = +new Date();
console.log(reverseArrayInPlace([1, 2, 4, 4, 5, 6, 7, 7]));
var end2 =  +new Date();
var diff2 = end2 - start2;
console.log(diff2 + " 2st");//>>1ms
