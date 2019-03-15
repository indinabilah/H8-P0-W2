function tentukanDeretAritmatika(arr) {
  // Contoh, [2, 4, 6, 8] adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan [2, 4, 6, 9] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.
  var selisih = arr.slice(-1).pop() - arr.slice(-2, -1).pop()
  //ex 1: 6-5=1
  var length = arr.length
  var i
  for(i = length-1; i > 0; i--){
    var a =''
    if(selisih == (arr[i] - arr[i-1])){
      a = true
    }else{
      a = false
    }
  }
  return a
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
