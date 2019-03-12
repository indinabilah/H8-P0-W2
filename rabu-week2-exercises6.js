//palindrom Angka

function angkaPalindrome(num) {
  // you can only write your code here!
  while(true){
    num++
    var str = String(num)
    var length = str.length
    var i
    var word = ''
    for(i = length-1; i >= 0; i--){
     word = word + str[i]
    }

    if(word === str){
      return Number(word)
    }
  }

}


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
