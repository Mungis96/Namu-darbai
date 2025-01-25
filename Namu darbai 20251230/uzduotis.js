function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//panaudojimo pavyzdys. Panaudojama rand funkcija sugeneruoja atsitiktinį:
//skaičių nuo 1 iki 5
// let iskritesSkaiciusNuo1Iki5 = rand(1, 5);
// //skaičių nuo 7 iki 100
// let iskritesSkaiciusNuo1Iki100 = rand(7, 100);

let iskritesSkaiciusNuo1Iki6 = rand(1, 6);
console.log(`Iškrito kauliukas - ${iskritesSkaiciusNuo1Iki6} `);

if (iskritesSkaiciusNuo1Iki6 % 2 == 0) {
  if (iskritesSkaiciusNuo1Iki6 == 6) {
    console.log('"Va bank!"');
  }
  console.log(`"Lyginis"`);
} else if (iskritesSkaiciusNuo1Iki6 == 1) {
  console.log(`"Whoops!"`);
} else {
  console.log(`"Nelyginis"`);
}



