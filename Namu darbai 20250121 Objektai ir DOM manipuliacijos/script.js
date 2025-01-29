const questions = [
  {
    question: "Kas yra 'let'?",
    answers: ["Kintamasis", "Funkcija", "Ciklas", "DOM elementas"],
    correctAnswer: 0, // Indeksas teisingo atsakymo
  },
  {
    question: "Ką daro 'document.querySelector'?",
    answers: [
      "Keičia stilių",
      "Pasirenka DOM elementą",
      "Prideda tekstą",
      "Sukuria funkciją",
    ],
    correctAnswer: 0,
  },
];

function hiddenButton() {
  let x = document.querySelector(".quiz-container");
  console.log(x);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
