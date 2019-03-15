function angkaPrima(angka) {
  // Function akan me-return true jika angka tersebut adalah bilangan prima.
  // Jika tidak, return false
  //i ini nanti buat pencarian dibagi eh auk pokok gitu dah sama angka masuk (nb)
  var a = true
  var arr = [angka]
  var length = arr.length
  for(i = angka-1; i > 0; i--){
    arr.unshift(i)
  }
  for(j = arr.length-1; j > 1; j--){
    if(angka % j === 0 ){
      a = false
    }
  }
  return a
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
