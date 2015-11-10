function countBs(str) {
  for (var i = 0, countB = 0; i < str.length; i++){
    countB += str.charAt(i) === 'B' ? 1 : 0
  }
  return countB
}

console.log(countBs('BOOHU BOBOBOBOBOB'));

function countChar(str, char) {
  for (var i = 0, countB = 0; i < str.length; i++){
    countB += str.charAt(i) === char ? 1 : 0
  }
  return countB
}

console.log(countChar('BOOHU BOBOBOBOBOB', 'u'));
