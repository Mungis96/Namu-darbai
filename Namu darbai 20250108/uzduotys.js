// 1. Sukurti funkciją, kuri atiduoda pirmą pateikto teksto simbolį;

// function pirmasSimbolis(tekstas) {
//     return tekstas.charAt(0);
// }

// let rezultatas1 = pirmasSimbolis("Augustas");
// console.log (rezultatas1);

// 2. Sukurti funkciją, kuri atiduoda paskutinį pateikto teksto simbolį;

// function paskutinisSimbolis(tekstas) {
//     return tekstas.charAt(tekstas.length - 1);
// } 

// let rezultatas2 = paskutinisSimbolis("Augustas");
// console.log ( rezultatas2);

// 3. Sukurti funkciją, kuri pakeičia visas tekste pateiktas o raides į 0 (nulius)


// let tekstas = "olafas oloje ieškojo olafienės";
// tekstas = tekstas.replace(/o/g , "0"); 
// console.log(tekstas);

// 4. Sukurti funkciją, kuri atiduoda tekstą be paskutinio simbolio

// let text = "Labas, aš krabas";
// let textpart = text.slice(0,15);
// console.log(textpart);

// 5. Sukurti funkciją, kuri priimanti tekstą pakeičia pirmąsias dvi raides vietomis

// function changeTwoLetters(text) {
//     return text[1] + text[0] + text.slice(2);
// }
// console.log(changeTwoLetters("Ar pažįsti tu dieduką"));

// 6. Sukurti funkciją, kuri gavusi datą formatu "2024-01-01" atiduoda metus "2024"

// const dateInput = document.querySelector("#datos-ivestis");
// function getDate() {
//     let metai = dateInput.value.slice(0,4);
//     console.log(metai);
// }

// 7. Sukurti funkciją, kuri gavusi datą tekstiniu formatu "2024-01-01" atiduoda mėnesį pagal jo pavadinimą: "Sausis"

// const monthInput = document.querySelector("#menesio-ivestis");
// function getMonth() {
//     let menesis = monthInput.value.slice(5,7);
//     menesis = menesis.replaceAll("01", "Sausis");
//     console.log(menesis);
// }

// 8. Sukurti funkciją, kuri priimant parametrą savaitėsDiena (skaičius), atitinkamai gražina savaitės dienos pavadinimą lietuvių kalboje. pvz savaitesDiena(1) -> “Pirmadienis”;

// const dayInput = document.querySelector("#savaites-diena");
// function savaitesDienele(dienuke) {
// const savaitesDienos = ["Pirmadienis" , "Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis","Sekmadienis"];

// if (dienuke >=1 && dienuke <=7) {
//     return savaitesDienos[dienuke -1];
// } else {
//     return "Įveskite skaičių nuo 1 iki 7";
// }
// }
//  console.log(savaitesDienele())

//  function getDay() {
//     const dienuke = String(dayInput.value);
//     const result = savaitesDienele(dienuke);
//     document.querySelector("#result").textContent = result;


// }
// 9. Sukurti funkciją, kuri priima parametrą saliesKodas. saliesKodas gali būti pateikiamas iš 3 raidžių (pvz: LTU) arba 2 raidžių (pvz.: LT). Pateikite pilną šalies pavadinimą pagal pateiktą šalies trumpinį.
// LVA arba LV - Latvija
// LTU arba LT - Lietuva
// POL arba PL - Lenkija
// SWE arba SE - Švedija
// GER arba DE - Vokietija
// Visi kiti šalių kodai - Nežinoma šalis

// function saliesKodas(salys) {
//     const trysKaraliai = ("LVA","LTU","POL","SWE","GER");
//     // const broliaiSaunuoliai = ("LV","LT","PL","SE","DE");
//     if(salys < 1 || salys > 5) {
//         return "Nežinoma šalis";
//     }
//     return trysKaraliai[salys];

// }
// console.log(saliesKodas);

function kokiaVeliava(saliesKodas) {
    saliesKodas = saliesKodas.toUpperCase()
    if (saliesKodas === "LVA" || saliesKodas === "LV") {
        return "Latvija";
    }
    if (saliesKodas === "LTU" || saliesKodas === "LT") {
        return "Lietuva";
    }
    if (saliesKodas === "POL" || saliesKodas === "PL") {
        return "Lenkija";
    }
    if (saliesKodas === "SWE" || saliesKodas === "SE") {
        return "Švedija";
    }
    if (saliesKodas === "GER" || saliesKodas === "DE") {
        return "Vokietija";
    }
    return "Nežinoma šalis";
    
}
console.log(kokiaVeliava("ltu"));













