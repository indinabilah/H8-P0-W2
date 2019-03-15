function mengelompokkanAngka(arr) {
  // Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:
  //1
  //kelompok pertama (baris pertama) merupakan angka-angka genap
  //2
  //kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
  //3
  //kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
  //Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]

  var length = arr.length
  var isi = [[], [], []]
  //isi 0, 1, 2
  var ngisi = []

  for(i = 0; i < length; i++){
    if(arr[i] % 2 === 0){
      isi[0].push(arr[i])
    }else if(arr[i] % 2 !== 0){
      isi[1].push(arr[i])
    }else if(arr[i] % 3 === 0){
      isi[2].push(arr[i])
    }
  }
  return isi
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
