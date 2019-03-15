function groupAnimals(animals) {
  //Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase
  //Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
  //maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
  var urutAwal = animals.sort()
  var length = urutAwal.length
  //sama dengan variable
  var samaAlpha = animals[0][0]
  var urut = []
  //alpha ini nanti masuk ke urut urut[[alpha]]
  var alpha = []

  for(i = 0; i < length; i++){
    if(samaAlpha === animals[i][0]){
      urut.push(animals[i])
    }else{
      alpha.push(urut)
      urut = []
      samaAlpha = animals[i][0]
      urut.push(animals[i])
    }
    if(i === animals.length-1){
      alpha.push(urut)
    }
  }
  return alpha

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
