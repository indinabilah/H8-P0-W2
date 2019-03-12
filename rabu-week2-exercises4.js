//Menggunakan Built-in Function pada Array
// (dataHandling2())
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input){
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
  input.splice(4, 2, "Pria", "SMA Internasional Metro")
  console.log(input)

  a = input[3].split('/')
  // console.log(a)

  switch(a[1]){
    case '01':
    console.log(" Januari ")
    break;
    case '02':
    console.log(" Februari ")
    break;
    case '03':
    console.log(" Maret ")
    break;
    case '04':
    console.log(" April ")
    break;
    case '05':
    console.log(" Mei ")
    break;
    case '06':
    console.log(" Juni ")
    break;
    case '07':
    console.log(" Juli ")
    break;
    case '08':
    console.log(" Agustus ")
    break;
    case '09':
    console.log("September")
    break;
    case '10':
    console.log(" Oktober ")
    break;
    case '11':
    console.log(" November ")
    break;
    case '12':
    console.log(" Desember ")
    break;
  }

  console.log(a.join('-'))

  console.log(a.sort(function
  (a, b){return b-a}))

  //[ '0001', 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro' ]
  console.log(input[1].slice(0,15))


}

dataHandling2(input)
