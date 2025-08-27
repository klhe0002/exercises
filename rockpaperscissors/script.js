"use strict";

//definerer variabler
let userGuess;
let computerChoice;
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");

addEventListenersToButtons(); //kalder funktion

function addEventListenersToButtons() {
  rockBtn.addEventListener("click", rockClik); //gør dem klikbare
  paperBtn.addEventListener("click", paperkClik);
  scissorsBtn.addEventListener("click", scissorsClik);
}

function rockClik() {
  reset();
  console.log("rock");
  userGuess = "rock"; //her defineres hvad userGuess er
  computerGuess();
}

function paperkClik() {
  reset();
  console.log("paper");
  userGuess = "paper";
  computerGuess();
}
function scissorsClik() {
  reset();
  console.log("scissors");
  userGuess = "scissors";
  computerGuess();
}

function computerGuess() {
  const hands_arr = ["rock", "paper", "scissors"]; //laver et array  med de 3 muligheder
  const randomHand = Math.floor(Math.random() * 3); //bruger math random
  computerChoice = hands_arr[randomHand]; //her skrives constanten randomhand for det er random om det er det ene eller andet 0=rock 1=paper 2=scissors

  console.log(randomHand);

  animationStart();
}

function animationStart() {
  player1.classList.add("shake"); //starter animationen
  player2.classList.add("shake");

  player1.addEventListener("animationend", animationEnd); //
  player2.addEventListener("animationend", animationEnd);
}

function animationEnd() {
  //fjerne classen igen (fjerne event listner )
  //vis hånden
  player1.classList.remove("shake");
  player1.classList.add(userGuess); //her tilføjes den klaase der svarer til userGuess

  player2.classList.remove("shake");
  player2.classList.add(computerChoice);

  player1.addEventListener("animationend", showResult);
  player2.addEventListener("animationend", showResult);
}

function showResult() {
  if (userGuess === computerChoice) {
    draw.classList.remove("hidden");
  } else if ((userGuess === "rock" && computerChoice === "scissors") || (userGuess === "scissors" && computerChoice === "paper") || (userGuess === "paper" && computerChoice === "rock")) {
    win.classList.remove("hidden");
  } else {
    lose.classList.remove("hidden");
  }
}

function reset() {
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");

  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");
}
