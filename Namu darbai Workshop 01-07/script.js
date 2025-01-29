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

// 1.
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

// 3.

// let index = 0;
// while ( index <= 10) {
//     index +=2;
//     console.log(`Skaičius i = ${index}`);
// }

// 4.Naudojantis ciklu, sumuokite visus skaičius nuo 1 iki 100 ir išveskite
// galutinį rezultatą.
// Uždavinį išspręskit dviem skirtingais būdais while ir for ciklu

// const members = [];
// let index = 0;
// suma = 0;
// while( index <= 100) {
//     suma += index;
//     index++;
// }

// console.log(suma);

// for(i = 0; i <= 100; i++) {
// suma = 0;
// suma += i;
// console.log(suma);
// }

// 5.  Parašykite f-ją, kuri išvestų visus skaičius, kurie dalijasi iš 3
// intervale nuo 0 iki 100.
// Uždavinį išspręskit dviem skirtingais būdais while ir for ciklu

// function allNumbers(n) {
//     let index = 0;
//     while(index <= 100) {
//         if(index % n == 0) {
//             console.log(index);
//         }
//         index++;
//     }
// }
// // allNumbers(1);

// 6. Parašyti f-ją, kuriai būtų paduodamas bet kokio ilgio skaičius ir
// suskaičiuoja kiek skaitenų jį sudaro
// Pvz:

// function skaiciusVienas(number) {
// //     return Math.abs(number).toString().length;
// let result = 0;
// number = Math.abs(number);
// while (number > 0) {
//     number = Math.floor(number / 10);
//     result++;
// }
// return result;
// }
// console.log(skaiciusVienas(458962)) ;
// console.log(skaiciusVienas(452)) ;
// console.log(skaiciusVienas(-19));

// 7. Matematikas, pastebėjęs gobšaus turtuolį pasiūlė tokį sandorį:
// Pirmą dieną jis turtuoliui duos 1 mln. dolerių, o tas jam už tai sumokės 2
// centus. Kitą dieną matematikas ir vėl duos turtuoliui 1 mln. dolerių, o tas
// jam užmokės dvigubai daugiau negu praėjusią dieną, t.y. 4 centus. Ir taip jie
// darys visą mėnesį (31 dieną, matematikas kasdien duos po milijoną dolerių, o
// turtuolis mokės dvigubai daugiau negu praėjusią dieną. Parašykite programą
// kuri suskaičiuotų kiek pinigų duos matematikas . turtuoliui ir kiek turtuolis
// sumokės matematikui.

// function kiekGausime() {
//     let turtuolisGaus = 0;
//     let matematikasGaus = 0.02;
//     for(let i = 1; i <=31 ; i++ ) {
//           turtuolisGaus += 1;
//           matematikasGaus *= 2;
//     }
//     matematikasGaus = (matematikasGaus / 1000000).toFixed(1);
//     return `Turtuolis gaus ${turtuolisGaus} mln. $ , o matematikas gaus ${matematikasGaus} mln. $ pinigų;`
// }

// console.log(kiekGausime());

// 8. Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100
// iki 999 intervale. Armstongo skaičiaus pvz ABC = A3 + B3 + C3 (visų
// atskirų skaitmenų pakeltų skaičiaus skaitmenų kiekio laipsniu suma.)

// function allArmstrong(skaicius) {
//     let skaitmenys = [];
//     let simboliai = (String(skaicius));
//     if(simboliai.length == 3) {
//         let suma = 0;
//         for (let i = 0; i < 3; i++) {
//             skaitmenys.push(simboliai[i]);
//             kubas = Number(skaitmenys[i]) **3;
//             suma = kubas
//         }
//         return(suma);
//     } else return "Skaičius turi būti triženklis";
// }

// for (let i = 100; i <= 999; i++){
//     if (allArmstrong(i) === i) {
//         console.log(i);
//     }
// }

// 9. Parašykite funkcija kuri paskaičiuotų atstumą tarp dviejų taškų
// koordinačių sistemoje. Parametrai 4 perduodami skaičiai x1, y1, x2, y2
// @example:
// (0,0) (0,1) => 1
// (0,0) (1,0) => 1
// (-5,0) (10,-10) =>
// 18.027756377319946

// function distanceBetween(x1, y1, x2, y2) {
//     let a = x1 - x2;
//     let b = y1 - y2;
//     let c = Math.hypot(a, b);
//     return c;
// }

// console.log("9.Atstumas tarp taškų", distanceBetween(-3, 0, 15, -10));

// 1. Parašykite programą, kuri suskaičiuotų , kiek duotas skaičius a turi
// lyginių ir nelyginių skaitmenų.
// @example:
// 63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’

// function kiekSkaiciu(n) {
//     let lyginiai = 0;
//     let nelyginiai = 0;
//     while(n>0) {
//         let last = n % 10;
//         if(last % 2 == 0) {
//             lyginiai++;
//         }
//         else{
//             nelyginiai++;
//         }
//         n = Math.floor(n / 10)
//     }
//     return `${lyginiai} skaičiai lyginiai, ${nelyginiai} skaičiai nelyginiai` ;
// }
// console.log(kiekSkaiciu(4,6,7,8,2,1,4,5,6))

// 2. Parašykite funkciją, kuri priimtų parametru du tekstus ir išvestų kuris
// tekstas ilgesnis ir tą tekstą
// @example:  (‘abc’, ‘b’) => ‘tekstas “abc” yra ilgesnis, jo ilgis 3 simboliai’
// (‘abcd’, ‘abcd’) => ‘abu tekstai lygus, jų ilgis 4 simboliai’

// function duTekstai(a, b) {
//     if(a.lenght > b.lenght) {
//         return `tekstas ${a} yra ilgesnis, jo ilgis ${a.lenght} simboliai`;
//     }
//     else if (a.lenght < b.lenght) {
//         return `tekstas ${b} yra ilgesnis, jo ilgis ${b.lenght} simboliai`;
//     }
//     else {
//         return `abu tekstai lygus, jų ilgis 4 simboliai`

//     }
// }

// 3. Sukurkite tuščią masyvą.
// • Įdėkite 4 elementus į masyvą
// • Pridėkite 1 elementą į masyvo galą
// • Ištrinkite vidurinį elementą ir išveskite jį į consolę
// • Išveskite į consolę masyvą pasirašytos f-jos pagalba.
// • Pakeiskite 2 elementą nauja reikšme
// • Pridėkite du naujus elementus į masyvo pradžią
// • Išveskite į consolę masyvą pasirašytos f-jos pagalba.

// let masyvas =["as", 2, "tu", 3, "jis", 5, "ji", 7];

// masyvas.push("robinas");
// console.log(masyvas);

// const pr = masyvas.splice(Math.floor(masyvas.length/2),1);
// console.log(pr);

// function print(masyvas) {
//     for(let i = 0; i < masyvas.length; i++) {
//         console.log(masyvas[i]);
//     }
// }
// print(masyvas);

// masyvas[1] = "Albinosas";
// console.log(masyvas);

// masyvas.unshift("Vanagas", 54);
// masyvas.splice(0, 0, "Vanagas", 54);

// console.log(masyvas);

// print(masyvas);

// 4. Parašykite f-ją kur konvertuotų masyvą į stringą
// @example:  arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

// function arrayString(masyvas) {
//     masyvas.toString()
//     return masyvas.join("");

// }
// console.log(arrayString([1, 2, 3, 4, 5, 6]));

// 5. Parašykite f-ją kuri apverstų masyvą
// @example:  reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

// function kitaPuse(masyvas) {
//     masyvas.reverse();
//     return masyvas;

// }
// console.log(kitaPuse([1, 2, 3, 4]));

// 6. Parašykite f-ją kuri gražintų paskutinį masyvo elementą
// @example:
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true

// function getLastItem(masyvas) {
//     const paskutinisEl = masyvas.slice(2, 3)
//     return paskutinisEl.join()
// }
// console.log(getLastItem([1, 2, 3]));
// console.log(getLastItem(["cat", "dog", "duck"]));
// console.log(getLastItem([true, false, true]));

// 7. Parašykite f-ją kuriai būtų perduodamas parametras masyvas iš skaičių.
// Ir gražinamas masyvas kurio elementai yra padauginti iš 2
// @example: multipliedArray([1, 2, 3, 4, 5, 6]) ➞ [2, 4, 6, 8, 10, 12]

// function multipliedArray(masyvas) {
//     return masyvas.map(num => num * 2);
// }
// console.log(multipliedArray([1, 2, 3, 4, 5, 6]));

// function multipliedArray(masyvas) {

//     for(let i = 0; i < masyvas.length; i++)  {
//        masyvas[i] *= 2;
//     }
//     return masyvas;
// }
// console.log(multipliedArray([1, 2, 3, 4, 5, 6]));

// 8. Parašykite f-ją, kuri konvertuotų visus masyvo elementus į stringus
// @example: parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

// function parseArray(masyvas) {
//    return masyvas.map(item => String(item));
// }
// console.log(parseArray([1, 2, "a", "b"]));

// function parseArray(masyvas) {
//     return masyvas.map(String);
// }
// console.log(parseArray([1, 2, "a", "b"]));

// 9.  Išvesti į consolę visą daugybos lentelę (ciklas cikle pagalba)


// function daugybosLentele() {
//     for( i = 1; i <= 10; i++) {
//         for(j = 1; j <= 10; j++) {
//             System.out.print(i + " * " + j + " = " + (i * j) + "\t");
//         }
//         System.out.printIn();
//     }
// }
// console.log(daugybosLentele());

// function daugybosLentele() {
//     for( i = 1; i <= 10; i++) {
        
//     }
// }

// 1. Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, Masyvo
// elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. Rasti
// geriausiai besimokantį ir blogiausiai.

// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   const atsitiktiniai = [];
//   function generuotiAtsitiktinius(n = 30, m = 1, o = 10) {
//     for (let i = 0; i < n; i++) {
//       let atsitiktinisSk = rand(m, o);
//       atsitiktiniai.push(atsitiktinisSk);
//     }
//     return atsitiktiniai;
//   }

//   function geriausiBlogiausi(masyvas){
//     const didziausias = [];
//     const maziausias = [];
//     for(let i = 0; i < masyvas.length; i++ ) {
//         if (masyvas[i] == 10) {
//             didziausias.push(masyvas[i]);
//         } else if (masyvas[i]== 1) {
//             maziausias.push(masyvas[i]);
//         }
//     }
//     return {didziausias, maziausias};
//   }

//   console.log(generuotiAtsitiktinius());
//   console.log(geriausiBlogiausi(atsitiktiniai));

//     2. Studento trimestro disciplinų skaičius yra 7, kiekvienoje disciplinoj min 3
// pažymiai. Rasti studento semestro vidurkį.
// Paprastesnis variantas susikuriam masyvą rankiniu būdu
// Sudėtingesnis variantas susigeneruojam masyvą iš random pažymių nuo 1 iki 10,
// pažymių kiekis irgi random nuo 3 iki 6

// Trys trimestrai = 7 dalykai po 3 pažymius ir išvesti vidurkį iš 7 disciplinų = išvesti vidurkį iš gautų disciplinų vidurkių.

// function rand(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const atsitiktiniai = [];
// //   let n = rand(3,6);
// function generuotiAtsitiktinius(n = rand(3, 6), m = 1, o = 10) {
//   for (let i = 0; i < n; i++) {
//     let atsitiktinisSk = rand(m, o);
//     atsitiktiniai.push(atsitiktinisSk);
//   }
//   return atsitiktiniai;
// }

// function disciplinosVidurkis(masyvas) {
//   let suma = 0;
//   for (let i = 0; i < masyvas.length; i++) {
//     suma += masyvas[i];
//   }
//   return (suma / masyvas.length).toFixed(1);
// }

// function trimestroVidurkis(n = rand(3,6), m = 1, o = 10) {
//     let rezultatai = [];
//     for (let i = 0; i < 7; i++) { // 7 disciplinos
//         let kiekPazymiu = rand(3,6); // random pazymiai
//         let pazymiai = [];
 
//         for (let j = 0; j < kiekPazymiu; j++) {
//             pazymiai.push(rand(m,o)); //pazymiai
//         }
//       rezultatai.push(+disciplinosVidurkis(pazymiai));
//     }
//     console.log(rezultatai);
//     return disciplinosVidurkis(rezultatai);
// }


// // console.log(generuotiAtsitiktinius());
// // console.log("Disciplinos vidurkis", disciplinosVidurkis(atsitiktiniai));
// console.log(trimestroVidurkis());

// 3. Mokytojų atlyginimai suvesti į masyvą. Rasti kiek žmonių gauna < nei 600 
// Eurų., < nei 800Eurų. ir < nei 1100 eurų. Iš tų trijų grupių surasti, kurių 
// yra daugiausia? 
// Paprastesnis variantas susikuriam masyvą rankiniu būdu su minimum 10 elementų 
// Sudėtingesnis variantas susigeneruojam masyvą iš random skaičių nuo 500 iki 
// 1100, elementų gali būti 100

function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      const atsitiktiniai = [];
      function generuotiAtsitiktinius(n = 100, m = 500, o = 1100) {
        for (let i = 0; i < n; i++) {
          let atsitiktinisSk = rand(m, o);
          atsitiktiniai.push(atsitiktinisSk);
        }
        return atsitiktiniai;
      }
function trysAtlyginimai(n) {
    let maziauNei600 = 0;
    let maziauNei800 = 0;
    let maziauNei1100 = 0;
    for(let i = 0; i < n.length; i++) {
        if(n[i]< 600) {
            maziauNei600++;
        } else if(n[i] < 800) {
            maziauNei800++;
        } else {
            maziauNei1100++;
        }
        
    }

    if(maziauNei600 > maziauNei800 && maziauNei600 > maziauNei1100) {
         return `Daugiausiai yra atlyginimų po 600 kurių yra ${maziauNei600}` ;
    }
    else if(maziauNei800 > maziauNei600 && maziauNei800 > maziauNei1100) {
        return `Daugiausiai yra atlyginimų po 800 kurių yra ${maziauNei800}`
    }
    else if(maziauNei1100 > maziauNei600 && maziauNei1100 > maziauNei800) {
        return `Daugiausiai yra atlyginimų po 1100 kurių yra ${maziauNei1100}`
    } else return "Po lygiai";
}
    
      console.log(generuotiAtsitiktinius());
    //   console.log(geriausiBlogiausi(atsitiktiniai));
    console.log(trysAtlyginimai(atsitiktiniai));

// 4. Parašyti f-ją kuri sudvigubintu masyvą 
// @example 
// ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true] 
// [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5] 

// function dvigubasMasyvas(array){
//     return array.concat(array);
//   }
//   console.log(dvigubasMasyvas(['Ace' , 10, true]));
//   console.log(dvigubasMasyvas([0, 1, 2, 3]));

// 5. Parašyti funkciją, kuri stringų masyvo elementus transformuoja į didžiasias 
// raides.  
// @example 
// [ 'internship', 'glutinous-shriek', 'elevation' ] => [ 'INTERNSHIP', 
// 'GLUTINOUS-SHRIEK', 'ELEVATION' ], 
// [ 'a', 'b', 'c', 'd', 'e'  ]  => [ 'A', 'B', 'C', 'D', 'E' ] 

//   const array = [  'a', 'b', 'c', 'd', 'e'   ];
// const newArray = [];
// for (let i = 0; i < array.length; i++) {
//   let capitalizeArray = array[i].toUpperCase();
//   newArray.push(capitalizeArray); 
//   };
// console.log(newArray);

// 6. Parašyti f-ją, kuri, gražintų masyvą su kito masyvo string ilgiais 
// @example 
// [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ] 
// [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]

// const obuolys = ['', 'a', 'bc', 'def', 'ghij'];
// function pakeistiStrinIStringIlgi(masyvas) {
//   for (let i = 0; i < masyvas.length; i++) {
//     masyvas.splice(i, 1, masyvas[i].length);
//   }
//   return masyvas;
// }
 
// console.log(pakeistiStrinIStringIlgi(obuolys));

// function stringIlgis(arr) {
//     return arr.map(str => str.length);
//   }
   
//   let input = [ '', 'a', 'bc', 'def', 'ghij' ];
//   let output = stringIlgis(input);
//   console.log(output);

