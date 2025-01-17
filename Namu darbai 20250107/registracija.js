const inputas = document.querySelector("#vardo-ivestis");
const pavardesinputas = document.querySelector("#pavardės-ivestis");
const termsCheckbox = document.querySelector("#terms");
const emailinputas = document.querySelector("#elektroninis-paštas");

function getItForm() {
    let vardas = inputas.value.slice(0,3);
    String(rand(3 , 40));
    console.log(vardas);

    let pavarde = pavardesinputas.value;
    String(rand(3 , 70));
    console.log(pavarde);

    let arSutinkaSuTaisyklėmis = termsCheckbox.checked;
    console.log(arSutinkaSuTaisyklėmis);
    
    if (!arSutinkaSuTaisyklėmis) {
        alert ("Nesutikote su taisyklėmis ir sąlygomis!");
    }
}





function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

