//input "hello world!"
//output
//"!dlrow olleh"

function balikString(input){
  var length = input.length
  var i
  var word = ''
  for(i = length-1; i >= 0; i--){
    word = word + input[i]
  }
  return word
}

console.log(balikString('Hello World!'))
