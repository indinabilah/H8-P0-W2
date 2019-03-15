function konversiMenit(menit) {
  var jam
  var sisaJam
  var i = 60
  jam = Math.floor(menit / i)
  //Math.floor buat pembulatan angka
  sisaJam = menit % i
  // return jam + ':' + sisaJam
  var str = String(sisaJam)
  var length = str.length
  // return length
  if(length == 1){
    var num = Number(sisaJam)
    return jam + ':' + 0 + num
  }else{
    var num = Number(sisaJam)
    return jam + ':' + num
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
