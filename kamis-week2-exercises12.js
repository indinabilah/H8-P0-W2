function tentukanDeretGeometri(arr) {
  // Contoh, [1, 3, 9, 27, 81] adalah deret aritmatika dengan pertambahan nilai sebesar pengalian 3,
  //dan [1, 3, 9, 27, 48] bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten secara perkalian (27 * 3 bukanlah 48!).
  var selisih = arr.slice(-1).pop() - arr.slice(-2, -1).pop()
  //ex 1: 6-5=1
  var length = arr.length
  for(i = length-1; i > 0; i--){
    var a =''
    if(selisih == (arr[i] / arr[i-1])){
      a = false
    }else{
      a = true
    }
  }
  return a
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
