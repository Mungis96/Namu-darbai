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

const masyvas = [4,5,6,7,2,4];

function tikMazesni(masyvas) {
    index = 0;
    while(index < masyvas.length) {
        if(masyvas[index] <= 5) {
            masyvas.splice(index,1);
        }
        index++;
    }
}
tikMazesni(masyvas);
console.log(masyvas);