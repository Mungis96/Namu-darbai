// const pirmoKauliukoElementas = document.querySelector("#first-dice-number");
// const antroKauliukoElementas = document.querySelector("#second-dice-number");
// const pirmoKauliukoLyginisElementas = document.querySelector(
//   "#first-dice-is-even"
// );
// const antroKauliukoLyginisElementas = document.querySelector(
//   "#second-dice-is-even"
// );

// function rand(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// //panaudojimo pavyzdys. Panaudojama rand funkcija sugeneruoja atsitiktinį:
// //skaičių nuo 1 iki 5
// // let iskritesSkaiciusNuo1Iki5 = rand(1, 5);
// // //skaičių nuo 7 iki 100
// // let iskritesSkaiciusNuo1Iki100 = rand(7, 100);

// let iskritesSkaiciusNuo1Iki6 = rand(1, 6);

// console.log(`Iškrito kauliukas - ${iskritesSkaiciusNuo1Iki6} `);
// let iskritesSkaiciusIki6 = rand(1, 6);

// console.log(`Iškrito kauliukas - ${iskritesSkaiciusIki6} `);

// if (iskritesSkaiciusNuo1Iki6 % 2 == 0 && iskritesSkaiciusIki6 % 2 == 0) {
//   if (iskritesSkaiciusNuo1Iki6 == 6 && iskritesSkaiciusIki6 == 6) {
//     console.log('"Va bank!"');
//     alert("Vienas iš 36");
//   }
//   console.log(`"Lyginis"`);
//   pirmoKauliukoLyginisElementas.innerHTML = "Lyginis";
// } else if (iskritesSkaiciusNuo1Iki6 == 1 && iskritesSkaiciusIki6 == 1) {
//   console.log(`"Whoops!"`);
// } else {
//   console.log(`"Nelyginis"`);
//   antroKauliukoLyginisElementas.innerHTML = "Nelyginis";
// }

// pirmoKauliukoElementas.innerHTML = iskritesSkaiciusNuo1Iki6;
// antroKauliukoElementas.innerHTML = iskritesSkaiciusIki6;

// // pirmoKauliukoElementas.style.color = "red";

// if (iskritesSkaiciusNuo1Iki6 > iskritesSkaiciusIki6) {
//   pirmoKauliukoElementas.style.color = "green";
//   antroKauliukoElementas.style.color = "red";
// } else if (iskritesSkaiciusNuo1Iki6 < iskritesSkaiciusIki6) {
//   pirmoKauliukoElementas.style.color = "red";
//   antroKauliukoElementas.style.color = "green";
// } else {
//   pirmoKauliukoElementas.style.color = "orange";
//   antroKauliukoElementas.style.color = "orange";
// }

