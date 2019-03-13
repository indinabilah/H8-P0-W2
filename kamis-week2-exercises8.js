function pasanganTerbesar(num) {
  var str = num.toString().split('')
  //berarti gw masukin ke array ni
  var dua = []
  for(i = 0; i<str.length-1; i++){
    dua[i] = Number(str[i]+str[i+1])
  }

  var pasanganTerbesar = dua[0]
  for(var j = 0; j<dua.length; j++){
    if(dua[j]>terbesar){
      terbesar = dua[j]
    }
  }

  return pasanganTerbesar
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
