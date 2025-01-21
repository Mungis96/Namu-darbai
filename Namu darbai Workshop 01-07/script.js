// 1. Sukurti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
// padidinamas vienetu ir gražinamas rezultatas

// function newnumber (num) {
//     num = num + 1;
//     return num;

    
// }

// console.log(newnumber (5) );

// 2. Sukurti f-ją, kuriai būtų perduodamas vienas parametras skaičius(valandos)
// ir  konvertuotų valandos į sekundes, bei gražintų rezultatą

// function time (num) {
//     num = num * 3600;
//     return num;
// }
// console.log( time (1) );


// function basketzone (baudos, dvit, trit) {
//     let rezult = baudos + dvit * 2 + trit + 3;
//     return rezult; 
// }
// console.log(basketzone (1, 2, 3) );

// Parašykite f-ją, kuri apskaičiuotų trikampio plotą.
// Perduodami parametrai trikampio aukštinė (h) ir trikampio pagrindas (b)
// Funkcija gražina trikampio plotą.

// Trikampio ploto formulė yra S = 1/2bh.

// Kur S - plotas, b – pagrindo ilgis, h – aukštinė.

// function plotas (pagrilgis, aukšt) {
//     let rezult = 0.5 * (pagrilgis * aukšt);
//     return rezult;
// }
//     console.log(plotas(2 , 2));

// Paraykite f-ją, kuriai būtų paduodami du parametrai (skaičiai), ir f-ja gražintų true  jei dviejų skaičių sumą yra mažiau arba lygų 100 ir false jei daugiau už 100.

// function lessThen (A1, A2) {

//     if(A1 + A2 <= 100) {
//     return true;
//     }
//     else if (A1 + A2 >= 100)
//     return false;

// }
// console.log(lessThen(55,455))

// Sukurkite f-ją, kuri nustatytų ar du paduodami argumentai yra lygūs. Gražiname true arba false

// function moreThen (A1, A2) {

//         if(A1 == A2 ) {
//         return true;
//         }
//         return false;
//     }
//     console.log(moreThen(456,455))

// Sukurti f-ją, kuri nustatytų, kuris iš paduodamų parametrų (n1, n2) yra didesnis. Jei n1 didesnis gražintų tekstą "n1 skaičius didesnis", jei "n2 skaičius didesnis", jei skaičiai lygūs gražintų n1 lygus n2.

// function lyguNelygu (n1, n2) {

//         if( n1 > n2 ) {
//         return n1 + ` skaičius didesnis už ` + n2;
//         }
//         else if ( n2 > n1 ) {
//         return n2 + ` skaičius didesnis už ` + n1;
//         }
//         else if ( n1 = n2) {
//         return n1 + ` lygus ` + n2;
//         }

//     }
//     console.log(lyguNelygu(1,1));


// Sukurti f-ją, kuri paskaičiuotų bendrą ūkininko gyvulių kojų skaičių. Ūkininkas pateikia tris parametrus Pirmas parametras vištų skaičius, antras karvių skaičius, trečias paršelių skaičius ūkyje.
// F-ja gražiną bendrą kojų skaičių

// function kojuBalius(višt, karv, parš) {
//     let rezultatas = (2*višt + ( 4 * ( karv + parš )));
//     return rezultatas;
// }
// console.log(kojuBalius(2,2,2));

// Sukurk f-ją, kuri gautu du parametrus (a, b). F-ja gražina 10 jei vienas iš skaičiu = 10 arba tų skaičių suma  = 10

// function kiekBus(a, b) {
//     if(a == 10 || b == 10 || a + b == 10){
//         return true;
//     }
//         return false;
// }
// console.log(kiekBus(4,5));

//     Sukurk f-ją, kuri gauna vieną parametrą skaičių (n)
// ir jei skaičius dalinasi iš 100, gražiną true, priešingu atveju false.

// function buBu(n1) {
//     if(n1 % 100 === 0 ){
//         return true;
//     }
//     return false;
// }
// console.log(buBu(100));

// Sukurk f-ją, kuri patikrintu ar asmuo turi leidimą ir ar asmuo yra vyresnis nei 18 metų abi sąlygos būtinos, kad f-ja gražintų true, priešingu atveju gražina false

// function arPilnametis(amzius,arTuriLeidima) {
//     if(amzius >= 18 && arTuriLeidima == true) {
//         return true;
//     }
//     return false;

// }
// console.log(arPilnametis(18,true));

// 1 Parašykite f - ją, kuri patikrintų ar galima sudaryti trikampį 
// iš 3 duotų kraštinių ilgių(a, b, c).  
// Atsakymo pvz:  
// „kraštinės a, b, c sudaro trikampį“ 
// „kraštinės a, b, c nesudaro trikampį“

// function trysKampai(a, b, c) {
//     if (a + b + c > 30) {
//         return "kraštinės a, b, c sudaro trikampį";
//     }
//     return "kraštinės a, b, c nesudaro trikampį";

// }
// console.log(trysKampai(10, 10, 11));

// 2. Kavos puodelių skaičiuotuvas. 6 nusiperki, 7 nemokamas. 
// Sukurti f-ją, kuri apskaičiuotų kiek kavos puodelių iš viso 
// pirkėjas gaus. 
// Pavyzdys:  
// totalCups(6) ➞ 7 
// totalCups(12) ➞ 14 
// totalCups(213) ➞ 248

// function kavosPuodeliai(pirkimoKiekis) {
//     let totalCups = Math.floor((pirkimoKiekis + (pirkimoKiekis / 6  )));
//     return totalCups;

// }
// console.log(kavosPuodeliai());

// 3. 
// Parašykite funkciją, kuri apskaičiuos nuolaidos dydį 
// priklausomai nuo to, kiek pinigų pirkėjas išleido.  
// Skaičiavimai atlikti pagal šias taisykles: 
// Iki 50 € – nuolaida nėra taikoma(0 %).
//     Nuo 50 € iki 100 € – taikoma 10 % nuolaida.
//         Nuo 100 € iki 200 € – taikoma 15 % nuolaida. 
// Daugiau nei 200 € – taikoma 20 % nuolaida. 
// Išvedimo pvz: Pirkėjas pirko prekių už X sumą, kam buvo 
// pritaikyta nuolaida Y, Pirkėjas sumokėjo Z sumą pinigų.

// function nuolaidosDydis(isleistaSuma, nuolaida) {
//     let rezult = isleistaSuma - ((isleistaSuma * nuolaida) / 100);
//     let tekstas = `Pirkėjas pirko prekių už ${isleistaSuma} eur sumą, kam buvo 
// pritaikyta nuolaida ${nuolaida} %, Pirkėjas sumokėjo ${rezult} sumą pinigų.`
//     if (isleistaSuma < 50) {
//         return isleistaSuma;
//     }
//     else if
//         (isleistaSuma >= 50 || isleistaSuma <= 100) {
//         return tekstas;
//     } else if (isleistaSuma >= 100 || isleistaSuma <= 200) {
//         return tekstas;
// }
// }
// console.log(nuolaidosDydis(105, 15));

// 4. Sukurkite funkciją, kuri patikrins, ar skaičius yra tam 
// tikrame intervale. Funkcija turėtų priimti  tris parametrus:  
// skaičių ir du intervalus (minimalų ir maksimalų), grąžinti true, 
// jei skaičius yra intervale, ir false, jei ne.

// function ar_patenka(skaicius, par1, par2) {
//     if(par1 < par2) {
//         if (skaicius >= par1 && skaicius <= par2) return true ;
//         else return false;
//     } else {
//         if (skaicius <= par1 && skaicius >= par2) return true;
//         else return false;
//     }
    
// }

// console.log(ar_patenka(0, -2, 9));
// console.log(ar_patenka(0, 9, -2));
// console.log(ar_patenka(50, -100, 9));
// console.log(ar_patenka(50, 10, -110));

// UZDUOTIS NR. 3 

1. 
// Parašykite f-ją, kuri išvestų nurodyto skaičiaus daugybos lentelę 
// Multiplication(3) 
// 1 * 3 = 3 
// 2 * 3 = 6 
// 3 * 3 = 9 
// Ir t.t. iki 
// 10 * 3 = 30

// function multiPlication(kintantisSk) {
//     const skaiciai = [];
//     let index = 1;
//     while (index <= 10) {
//         skaiciai.push(index + "*" + kintantisSk + "=" + (index * kintantisSk));
//     index ++;

// }
// return skaiciai.join(`\n`);
// } 

// console.log(multiPlication(3));

// 2. Išvesti į konsolę skaičiuos nuo 10 iki 100. Visais žinomais ciklais while, 
// , for 
// pvz (10, 20, 30,..,..,..,.., 100)

// const text = [];
// let index = 10;
// while (index <= 100){
//     text.push(index);
//     index++;
// }
// console.log(text);

// const text = [];
// for (let index = 10; index <= 100; index++) {
//     text.push(index)
    
// }
// console.log(text)



    







