"use strict";

/* Nu skal vi lave en “Gæt et tal” igen, men med rollerne byttet rundt:

Det er nu computeren der skal gætte det tal mellem 0 og 100 du tænker på.

Når du herefter klikker på en knap skal computeren komme med et kvalificeret gæt og det gæt skal vises på siden. 

 

Der skal så være tre knapper hvor brugeren kan fortælle computeren om dens gæt er for højt, for lavt eller om den har gættet rigtigt.

Der kan også være en knap til at starte det hele

Computeren skal gætte tallet hurtigst muligt.

Sørg for at man ikke kan klikke på knapper man ikke skal kunne klikke på.

For at få inspiration til løsningen af opgaven kan i sætte jer sammen i grupper af to og analysere hvad der foregår når man leger gæt et tal.

Hvordan gætter man tallet hurtigst og mest rationelt?

Her er et link til hvordan opgaven kunne se ud ustylet, jeres skal være stylet og med animationer, giv den gas med UI/UX.

Ekstra: Når tallet er gættet skal computeren skrive til siden hvor mange gæt den har brugt. */

// function computerGuess() {
//   makeGuess();
//   //   computerChoice = mid;
//   //   console.log(mid);

//   //   document.querySelector("#h1").textContent = mid;

//   //   addEventListenersToResultButtons();
// }
const tooHightBtn = document.querySelector("#too_high");
const tooLowBtn = document.querySelector("#too_low");
const correctBtn = document.querySelector("#correct");
const startBtn = document.querySelector("#start");

let computerChoice;
let userChoice;

let min = 0;
let max = 100;
let mid = Math.floor((min + max) / 2);
let guess;
startGame();

function startGame() {
  startBtn.addEventListener("click", makeGuess); //gør dem klikbare
}

tooHightBtn.addEventListener("click", tooHigh); //gør dem klikbare
tooLowBtn.addEventListener("click", tooLow);
correctBtn.addEventListener("click", correct);

function tooHigh() {
  max = guess;
  makeGuess();
}

function tooLow() {
  min = guess;
  makeGuess();
}

function makeGuess() {
  guess = Math.floor((min + max) / 2);
  console.log("guess", guess);
  document.querySelector("#h1").textContent = guess;
}

function correct() {
  document.querySelector("#h1").textContent = "Yay, you guessed it!";
}

function result() {}

function reset() {}
