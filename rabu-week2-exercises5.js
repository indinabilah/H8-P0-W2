function palindrome(kata) {
  // you can only write your code here!
  var length = kata.length
  var i
  var word = ''
  for(i = length-1; i >= 0; i--){
    word = word + kata[i]
  }

  var a =''
    if(word === kata){
      a = 'true'
    }else{
      a = 'false'
    }
  return a
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
