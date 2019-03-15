function targetTerdekat(arr) {
  //Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'],
  //maka jarak terdekat dari 'o' ke 'x' adalah 2.
  //Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0
  var charO = []
  var charX = []
  var length = arr.length
  var isiO = []
  var isiX = []
  for(i = 0; i < length; i++){
    if(arr[i] == 'o'){
      isiO.push(i)
      //indexO = arr[i] + ' array ke ' + i
      // console.log(indexO)
    }
    if(arr[i] == 'x'){
      isiX.push(i)
      // indexX = arr[i] + ' array ke ' + i
      // console.log(indexX)
    }
  }
  if(isiX.length === 0){
    return 0
  }else{
    if(isiX[0] < isiO[0]){
      return Math.abs(isiX[isiX.length-1] - isiO[0])
    }else{
      return Math.abs(isiO[isiO.length-1] - isiX[0])
    }
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
