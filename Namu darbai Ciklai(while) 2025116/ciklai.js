// Sukurkite funkciją, kuri sukuria atsitiktinių skaičių masyvą iš N elementų. Atsitiktiniai skaičiai nuo M iki O;
// pvz:
// function rand(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const skaičiai = [];

// index = 0;
// while (index <= 200) {
//     const atsitiktinisSk = rand(1, 200);
//     skaičiai.push(atsitiktinisSk);
//     index+= 2
// }
// console.log(skaičiai);
// console.log(generuotiAtsitiktinius(4, 100, 105)); 
// atsakymas konsolėje: [101, 101, 100, 105]


// function rand(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const atsitiktiniai = [];
// index = 0;
// while (index < 10) {
// 	const atsitiktinisSk = rand(1, 100); //44
// 	atsitiktiniai.push(atsitiktinisSk);
// 	index++;
// }

// console.log(atsitiktiniai);


// Reikia sukurti funkciją, kuriai padavus skaičių masyvą, reiktų atlikti filtraciją ir palikti tik lyginius skaičius masyveir jį atiduoti iš funkcijos.

const masyvas = [1, 2, 3, 4];

function filtruotiNelyginius(masyvas) {
let index = 0;

while(index < masyvas.length)
{
    if(masyvas[index]%2>0){
        masyvas.splice(index-1, 1)
    }
index++;
}
}