var list = {
  value : 1,
  rest : {
    value : 2,
    rest : {
      value : 3,
    }
  }
}


list = {
  value : 0,
  rest : list
}


list = {
  value : -1,
  rest : list
}

function arrayToList(array) {
  var list = {}, tail = {}, i = array.length - 2
  tail = {
    value : array[array.length - 1]
  }
  while (i >= 0) {
    list = {
      value : array[i],
      rest : tail
    }
    tail = list
    i --
  }
  return list
}

console.log(arrayToList([2, 4, 6, 7]));
