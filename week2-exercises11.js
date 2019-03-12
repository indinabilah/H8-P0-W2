function balikKata(kata) {
  var length = kata.length
  var i
  var word = ''
  for(i = length-1; i >= 0; i--){
    word = word + kata[i]
    //this world is '' + kata[i]
    //word '[i]'
  }
  return word
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
