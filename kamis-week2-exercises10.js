function perkalianUnik(arr) {
  // Contoh, jika arr adalah [1, 2, 3, 4, 5],
  //maka function akan mereturn [120, 60, 40, 30, 24],
  //karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
  var length = arr.length
  var a = []
  var hasil
  var i
  var j
  for(i = 0; i< length; i++){
    var jumlah = 1
    for(j = 0; j < length; j++){
      if(i !== j){
        jumlah = jumlah * arr[j]
      }
    }
    a.push(jumlah)
  }
  return a

}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
