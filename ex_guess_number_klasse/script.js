"use strict";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

const computerNumber = Math.round(Math.random() * 101);
let brugerGuess;

btn.addEventListener("mousedown", click_btn);

// function getRandomNum (max) {
//   return Math.floor (Math.random() * max);
// }

// const computerNum = getRandomNum(100)

function click_btn() {
  brugerGuess = pareseInt(input.value); // fordi man skriver === pareseInt for at konvertere til et tal, så den ikke sammenlignder værdi

  //   console.log("KLIK");
  console.log(typeof brugerGuess);
  console.log("brugerGuess", brugerGuess);
  console.log("computerNumber", computerNumber);

  let feedback;

  if (brugerGuess < computerNumber) {
    feedback = "Det var for lavt. Prøv igen";
  } else if (brugerGuess > computerNumber) {
    feedback = "Det var for højt. Prøv igen";
  } else if (brugerGuess === computerNumber) {
    //her hvor det er vigtigt at brugerguess allerede er koverteret til number(pareseInt) fordi så sammenligner den tal og ikke type
    feedback = "Yay det var rigtigt";
  }

  h2.textContent = feedback; //skrive feedbacken ud i html som er vores h2
  console.log(feedback);
}
