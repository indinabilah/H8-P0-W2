function xo(str) {
  var length = str.length
  var a = 0
  var b = 0
  var i
  for(i = 0; i < length; i++){
    if(str[i]== 'x'){
      a += 1
    }else{
      b += 1
    }
  }
  var c
  if(a==b){
    c = 'true'
  }else{
    c = 'false'
  }
  return c
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
