// Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų. Atsitiktiniai skaičiai nuo M iki O;
// pvz:
// function rand(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const skaičiai = [];

// index = 1;
// while (index <= 4) {
//     const atsitiktinisSk = rand(100, 105);
//     skaičiai.push(atsitiktinisSk);
//     index++
// }
// console.log(skaičiai);
// console.log(generuotiAtsitiktinius(100, 105)); 
// atsakymas konsolėje: [101, 101, 100, 105]


// Reikia sukurti funkciją, kuriai padavus skaičių masyvą, reiktų atlikti filtraciją ir palikti tik lyginius skaičius masyveir jį atiduoti iš funkcijos.

// const masyvas = [1, 2, 3, 4];

// function filtruotiNelyginius(masyvas) {
    
// let index = 0;

// while(index < masyvas.length)
// {
//     if(masyvas[index] % 2 !== 0){
//         masyvas.splice(index, 1);
//     }
// index++;
// }
// }

// filtruotiNelyginius(masyvas);
// console.log(masyvas);

// Sukurkite funkciją, kuri console.log’e parašo tik skaičius iš masyvo M, mažesnius nei N.
// pvz: 
// tikMazesni([4,5,6,7,2,4], 5);
// atsakymas konsolėje: 4, 2, 4 

// const masyvas = [4,5,6,7,2,4];

// function tikMazesni(masyvas, reiksme) {

//     index = 0;
//     while(index < masyvas.length) {
//     if(masyvas[index] < reiksme) {
//         masyvas.slice(index, 1);
//     }
//         index++;
//     }
// }

// console.log(tikMazesni([4,5,6,7,2,4], 5));

// console.log();
// atsakymas konsolėje: 4, 2, 4 


// const masyvas = [
// 	1,
// 	3,
// 	4,
// 	9,
// 	6,
// 	2,
// 	1,
// 	0,
// 	-44,
// 	22,
// 	19,
// 	2,
// 	"a",
// 	true,
// 	"false",
// 	[4, 5, 6],
// ];

// function gautiKasAntraMasyvoElementa(masyvas) {
// 	for (let i = 0; i < masyvas.length; i++) {
// 		masyvas.splice(i, 1);
// 	}
// 	return masyvas;
// }

// console.log(gautiKasAntraMasyvoElementa(masyvas));

// Sukurkite funkciją, countAllThrees(array), kuri suskaičiuotų, kiek kartų pateiktame skaičių masyve yra pasikartojantis skaičius 3;

// function countAllThrees(array) {
//     let pasikartojimuSkaicius = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == 3) {
//             pasikartojimuSkaicius++;
//         }
//     }

//     return pasikartojimuSkaicius;

// }
// console.log(countAllThrees([3,3,4,5,6,3,3, 33]));

// Sukurkite funkcijas countAllEven(array) ir countAllOdd(array). Pirmoji funkcija suskaičiuoja, kiek yra lyginių skaičių pateiktame masyve. Kita suskaičiuoja kiek yra nelyginių skaičių;



function countAllEven(array) {
    let kiekPasikartojimu = 0;
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 == 0) {
            kiekPasikartojimu++;
        }
    } 
    return kiekPasikartojimu;
}

function countAllOdd(array) {
    let kiekPasikartojimu = 0;
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 != 0) {
            kiekPasikartojimu++;
        }
    } 
    return kiekPasikartojimu;
}

console.log(countAllEven([2,4,5,7,9,13,14]));
console.log(countAllOdd([2,4,5,7,9,13,14]));